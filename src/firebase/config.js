import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDvvDU55p7uj5HY-2-cddaEz7IFVMTp8Ow",
  authDomain: "proyecto-rn-20193.firebaseapp.com",
  projectId: "proyecto-rn-20193",
  storageBucket: "proyecto-rn-20193.firebasestorage.app",
  messagingSenderId: "1012592629781",
  appId: "1:1012592629781:web:e9843489ece43591b1561c"
};


app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();