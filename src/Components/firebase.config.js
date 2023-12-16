// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJTvzQFJki5Dbz0cgejxhIA1I9DxOm8BE",
  authDomain: "assingment-10-f10c8.firebaseapp.com",
  projectId: "assingment-10-f10c8",
  storageBucket: "assingment-10-f10c8.appspot.com",
  messagingSenderId: "200270406579",
  appId: "1:200270406579:web:be69f2669051be5ac221c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);