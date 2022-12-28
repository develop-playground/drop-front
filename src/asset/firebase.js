// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDosESqWS2j3iHQDT1zVtD5Fj4rl1eceG8',
  authDomain: 'drop-c2ea5.firebaseapp.com',
  projectId: 'drop-c2ea5',
  storageBucket: 'drop-c2ea5.appspot.com',
  messagingSenderId: '557684259031',
  appId: '1:557684259031:web:503f65b74052e8a3ae5892',
  measurementId: 'G-ZGNVT80PBV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
