import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAdhebuUa1UcV0V1KTOmlO2Dghc9M-8CjM",
  authDomain: "housandarts-96836.firebaseapp.com",
  projectId: "housandarts-96836",
  storageBucket: "housandarts-96836.appspot.com",
  messagingSenderId: "739415989440",
  appId: "1:739415989440:web:23813fc45410d4c1552125",
  measurementId: "G-FYXSW82JZS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
// Initialize Analytics
// firebase.analytics();


export  {
  storage, firebase as default
};
