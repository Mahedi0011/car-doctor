
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {


  apiKey: "AIzaSyCk4774VC52h2Kp-3DhtgMdt1LBf_eqMoQ",
  authDomain: "cars-doctor-28125.firebaseapp.com",
  projectId: "cars-doctor-28125",
  storageBucket: "cars-doctor-28125.appspot.com",
  messagingSenderId: "997837806701",
  appId: "1:997837806701:web:f5c8c7ac6d4ae96916f364"
  // apiKey:import.meta.env.VITE_apiKey,
  // authDomain:import.meta.env.VITE_authDomain,
  // projectId:import.meta.env.VITE_projectId,
  // storageBucket:import.meta.env.VITE_storageBucket,
  // messagingSenderId:import.meta.env.VITE_messagingSenderId,
  // appId:import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;