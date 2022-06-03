// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APP_KEY,
  authDomain: "nextauth-fb-authentication.firebaseapp.com",
  projectId: "nextauth-fb-authentication",
  storageBucket: "nextauth-fb-authentication.appspot.com",
  messagingSenderId: "637775452025",
  appId: "1:637775452025:web:f5646432153bac6eacc1a8",
};

// Initialize Firebase
export const fbApp = initializeApp(firebaseConfig);
export const fbAuth = getAuth(fbApp);
