// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi00uhgr23XYwBG6sL3V4chNiR1F0r87s",
  authDomain: "web-app-18fe6.firebaseapp.com",
  databaseURL: "https://web-app-18fe6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "web-app-18fe6",
  storageBucket: "web-app-18fe6.appspot.com",
  messagingSenderId: "988976506901",
  appId: "1:988976506901:web:aeffe6f61e9622731a861c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const rtdb = getDatabase();
export const store = getFirestore(app);