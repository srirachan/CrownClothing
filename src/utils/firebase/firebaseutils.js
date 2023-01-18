import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwCdxpkJabUj2XokvD3QBfRMT65NX6Dik",
  authDomain: "crown-clothing-db-2cd05.firebaseapp.com",
  projectId: "crown-clothing-db-2cd05",
  storageBucket: "crown-clothing-db-2cd05.appspot.com",
  messagingSenderId: "182726348547",
  appId: "1:182726348547:web:c970e584242f8f11ea2336",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
