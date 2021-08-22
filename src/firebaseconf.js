import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBX_mbQs9eOClmyd4SIHSj0MXUQ__KELNU",
    authDomain: "pet-seen-found.firebaseapp.com",
    projectId: "pet-seen-found",
    storageBucket: "pet-seen-found.appspot.com",
    messagingSenderId: "790719460703",
    appId: "1:790719460703:web:b70d3796d5e34341c3b2ea"
};

const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();
const db = fire.firestore();
const storage = fire.storage();

export { auth, db, storage };