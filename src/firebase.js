// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwIIfeZC1jWm6IfNxNRfwUhsCh-I_2-fw",
  authDomain: "restaurant-d1b9f.firebaseapp.com",
  projectId: "restaurant-d1b9f",
  storageBucket: "restaurant-d1b9f.appspot.com",
  messagingSenderId: "937992596276",
  appId: "1:937992596276:web:8d439a9385d875a153d361",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db ,storage};
