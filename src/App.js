import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import * as firebase from "firebase/app";
import "firebase/auth";

import Login from "./pages/Login"
import UserProfile from "./pages/UserProfile"
import Signup from "./pages/Signup"
import Logout from "./pages/Logout"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"

const firebaseConfig = {
  apiKey: "AIzaSyCaxSy0Z6JC91BCQy9C0JHCSgY1GUXoa_g",
  authDomain: "excercise-5.firebaseapp.com",
  databaseURL: "https://excercise-5.firebaseio.com",
  projectId: "excercise-5",
  storageBucket: "excercise-5.appspot.com",
  messagingSenderId: "186420722192",
  appId: "1:186420722192:web:41e5ddb0ba88e55c1ea895",
  measurementId: "G-RSMHTSNMNR"
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({})

  useEffect(() => {
    if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .catch(function(error) {
        console.log('error', error);
      });
  }, [firebaseConfig])

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        setLoggedIn(true);
        setUser(user);
      } else {
        setLoggedIn(false);
        setUser({});
      }
    });
  }, []);


  function signupFunction (e) {
    e.preventDefault();

    let email = e.currentTarget.createEmail.value;
    let password = e.currentTarget.createPassword.value;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(response) {
        setLoggedIn(true);
      })
      .catch(function(error) {
        console.log('error', error);
      });
  }

  function loginFunction (e) {
    e.preventDefault();

    let email = e.currentTarget.loginEmail.value;
    let password = e.currentTarget.loginPassword.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function(response) {
        setLoggedIn(true);
      })
      .catch(function(error) {
        console.log('error', error);
      });

  }

  function logoutFunction () {

    firebase.auth().signOut().then(function() {
      setLoggedIn(false);
    }).catch(function(error) {
      console.log('error', error);
    });

  }

  return (
    <div className="App">
      <Header loggedIn={loggedIn} logoutFunction={logoutFunction}/>
      <Router>
        <Route exact path="/">
          { loggedIn ? <UserProfile user={user} /> : <Redirect to="/login" /> } 
        </Route>
        <Route path="/signup">
          { loggedIn ? <Redirect to ="/" /> : <Signup signupFunction={signupFunction} />}
        </Route>
        <Route exact path="/login">
          { loggedIn ? <Redirect to="/" /> : <Login loginFunction={loginFunction} /> }
        </Route>
        <Route exact path="/dashboard" component={Dashboard}/>
      </Router>
    </div>
  );
}

export default App;
