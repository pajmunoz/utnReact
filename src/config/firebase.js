// Import the functions you need from the SDKs you need
import firebase  from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2Qi8bdsOtOtkaaFNcAjMDoNTKVOrhWLU",
    authDomain: "utnreact2022-af7ca.firebaseapp.com",
    projectId: "utnreact2022-af7ca",
    storageBucket: "utnreact2022-af7ca.appspot.com",
    messagingSenderId: "359645250874",
    appId: "1:359645250874:web:eb7b625735b6f02fa1bc03"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.auth = firebase.auth()
// Initialize Firebase
export default firebase