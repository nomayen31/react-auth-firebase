// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiGdX8L8ujHlR_r_b4Ma4IujZTzZ6ZUns",
  authDomain: "react-auth-session.firebaseapp.com",
  projectId: "react-auth-session",
  storageBucket: "react-auth-session.appspot.com",
  messagingSenderId: "676357447991",
  appId: "1:676357447991:web:28109d8e1d9a31e6cc3ab2"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export default app;