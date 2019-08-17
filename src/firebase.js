import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyCBZpv9uBN_1cdTTR-7l_2Rds3mKldC-zk",
    authDomain: "svelte-rxfire.firebaseapp.com",
    databaseURL: "https://svelte-rxfire.firebaseio.com",
    projectId: "svelte-rxfire",
    storageBucket: "svelte-rxfire.appspot.com",
    messagingSenderId: "1018185300604"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();