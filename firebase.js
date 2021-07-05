import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBNZ-lc4Rd08RxpfLrylXqpKp_Aspv7PSQ",
    authDomain: "scheduletracker-a45f1.firebaseapp.com",
    projectId: "scheduletracker-a45f1",
    storageBucket: "scheduletracker-a45f1.appspot.com",
    messagingSenderId: "631007615794",
    appId: "1:631007615794:web:b06902ca425720056fd52b",
    measurementId: "G-X0H6BRQQDR"
  };

  let app;
if(firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth }