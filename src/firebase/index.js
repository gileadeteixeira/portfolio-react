// Imports
import * as firebase from "firebase/app";
import * as firestore from "firebase/firestore"
import * as storage from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Firebase Config
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
getAnalytics(app);

// Exports
export const Firebase = firebase;
export const Storage = storage.getStorage();
export const Firestore = firestore.getFirestore();