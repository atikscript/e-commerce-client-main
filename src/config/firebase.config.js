// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwLXb7LrlkGw1XA_ZyK61RxIIGwXDZkAU",
  authDomain: "bonik-70872.firebaseapp.com",
  projectId: "bonik-70872",
  storageBucket: "bonik-70872.appspot.com",
  messagingSenderId: "767512470058",
  appId: "1:767512470058:web:7bc1696bed6f997e969953"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)