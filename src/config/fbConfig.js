import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
	apiKey: "AIzaSyDwgee5MWtC208j18BZtMrI9m3lINIwypE",
	authDomain: "dynamic-web-final-a8d2a.firebaseapp.com",
	databaseURL: "https://dynamic-web-final-a8d2a.firebaseio.com",
	projectId: "dynamic-web-final-a8d2a",
	storageBucket: "dynamic-web-final-a8d2a.appspot.com",
	messagingSenderId: "715674027548",
	appId: "1:715674027548:web:ef34c9a9703e539b1541d9",
	measurementId: "G-T6M3XC2PV4"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 