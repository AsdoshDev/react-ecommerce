import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();


firestore.collection('users').doc('Iyf3sKJalz8p0G3yojcp').collection('cartItems').doc('INzb2EBKlCXLck7tl4gv');

firestore.collection('/users/Iyf3sKJalz8p0G3yojcp/').doc('Iyf3sKJalz8p0G3yojcp').collection('cartItems').doc('INzb2EBKlCXLck7tl4gv');
firestore.collection('/users/Iyf3sKJalz8p0G3yojcp/cartItems/INzb2EBKlCXLck7tl4gv');