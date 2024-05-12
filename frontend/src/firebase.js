// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-storage.firebaseapp.com",
  projectId: "mern-project-storage",
  storageBucket: "mern-project-storage.appspot.com",
  messagingSenderId: "810225088881",
  appId: "1:810225088881:web:68f2361eb66f040f0a9ed0",
  measurementId: "G-5NXLLRFSC0"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);