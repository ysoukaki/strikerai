// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAjnUrHYLq41dE9JYOco2i9sj60Ju2-nEs",
    authDomain: "strikerai-ecb25.firebaseapp.com",
    projectId: "strikerai-ecb25",
    storageBucket: "strikerai-ecb25.firebasestorage.app",
    messagingSenderId: "444962915532",
    appId: "1:444962915532:web:a271d6ba488977f174ae69",
    measurementId: "G-FX9ZMHPT3N"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };