import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAmSvpjYfdFBSSRjdv9--_QKPPHsu0kKAA",
    authDomain: "crwn-db-209d5.firebaseapp.com",
    databaseURL: "https://crwn-db-209d5.firebaseio.com",
    projectId: "crwn-db-209d5",
    storageBucket: "crwn-db-209d5.appspot.com",
    messagingSenderId: "986137323223",
    appId: "1:986137323223:web:171ed4eb5e100ba4d77292",
    measurementId: "G-SKW146B0JF"
};


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
