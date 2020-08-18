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

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth)
        return;

    const usrRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await usrRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await usrRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log("Error while trying to create a user" + err.message);
        }
    }
    return usrRef;
}


export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const docRef = collectionRef.doc();
        batch.set(docRef, obj);
    })

    await batch.commit();
}


export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            items,
            title
        }
    });

    return transformedCollection.reduce((acc, item) => {
        acc[item.title.toLowerCase()] = item;
        return acc;
    }, {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();