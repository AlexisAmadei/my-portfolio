// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtWbNE1kE0_7u3SEhUliVCoztaiY_p4Dw",
  authDomain: "alexisa-portfolio.firebaseapp.com",
  projectId: "alexisa-portfolio",
  storageBucket: "alexisa-portfolio.appspot.com",
  messagingSenderId: "174339247120",
  appId: "1:174339247120:web:3f406616896a5f9d164e95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const perf = getPerformance(app);

export { app, perf };