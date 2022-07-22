// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      //? logic for setting status
    })
    .catch((err) => console.log(err));
};
