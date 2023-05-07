import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyB3QUV1jGbDXTOtQdqGyov0lNpM9-3ArBc",
    authDomain: "europa-8bd04.firebaseapp.com",
    projectId: "europa-8bd04",
    storageBucket: "europa-8bd04.appspot.com",
    messagingSenderId: "291501463661",
    appId: "1:291501463661:web:be242b69d202510eb4c764",
    measurementId: "G-SSSWL4CEV1"
  };

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
