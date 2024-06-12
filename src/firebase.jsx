import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-d0bf2.firebaseapp.com",
  projectId: "store-tutorial-d0bf2",
  storageBucket: "store-tutorial-d0bf2.appspot.com",
  messagingSenderId: "251591500382",
  appId: "1:251591500382:web:36faa4f95dcaccedeecacf"
};

const app = initializeApp(firebaseConfig); 
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);