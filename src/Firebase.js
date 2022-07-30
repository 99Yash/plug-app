// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";
import Profile from "./Profile";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCmVzwV4XU7rXm4thxkVODJK2QjftIv4aM",
  authDomain: "react-http-fc3fd.firebaseapp.com",
  databaseURL:
    "https://react-http-fc3fd-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "react-http-fc3fd",
  storageBucket: "react-http-fc3fd.appspot.com",
  messagingSenderId: "893114287077",
  appId: "1:893114287077:web:ae2d7222ada8c906fda50c",
};

// ?Initialize Firebase
export const app = initializeApp(firebaseConfig);

//?init service
// const db = getFirestore(app);

// //?get collection data
// getDocs(collRef).then((snap) => {
//   console.log(snap.docs);
// });

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getDatabase(app);
