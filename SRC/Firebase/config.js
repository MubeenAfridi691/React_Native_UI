// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDTkFS1ERvPAaeb6if3-gdioLK54qji_CM",
  authDomain: "chatapp-ba6a2.firebaseapp.com",
  projectId: "chatapp-ba6a2",
  storageBucket: "chatapp-ba6a2.appspot.com",
  messagingSenderId: "1080270914117",
  appId: "1:1080270914117:web:74fef148b92cb8cf58992c",
  measurementId: "G-HL7PFDP9EY"
};

// Initialize Firebase if it hasn't been initialized yet
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
