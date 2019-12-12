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
import CreatePost from "./pages/CreatePost"

const firebaseConfig = {
  apiKey: "AIzaSyDwgee5MWtC208j18BZtMrI9m3lINIwypE",
  authDomain: "dynamic-web-final-a8d2a.firebaseapp.com",
  databaseURL: "https://dynamic-web-final-a8d2a.firebaseio.com",
  projectId: "dynamic-web-final-a8d2a",
  storageBucket: "dynamic-web-final-a8d2a.appspot.com",
  messagingSenderId: "715674027548",
  appId: "1:715674027548:web:ef34c9a9703e539b1541d9",
  measurementId: "G-T6M3XC2PV4"
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
        <Route path="/createpost" component={CreatePost}/>
      </Router>
    </div>
  );
}

export default App;
