// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR67n0oyzQcttTXcUpzf2d7WWAjq2EiTg",
  authDomain: "hondaresturant.firebaseapp.com",
  projectId: "hondaresturant",
  storageBucket: "hondaresturant.firebasestorage.app",
  messagingSenderId: "890296040350",
  appId: "1:890296040350:web:649ac157e1a2a50f99748f",
  measurementId: "G-E6QVKDN89K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };