// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0DoltG5rmxXHyugDF_M5eXzRlcaYnNEM",
  authDomain: "trishal-medical-center.firebaseapp.com",
  projectId: "trishal-medical-center",
  storageBucket: "trishal-medical-center.appspot.com",
  messagingSenderId: "287163047750",
  appId: "1:287163047750:web:fabfc7929357bb20bc0f47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;