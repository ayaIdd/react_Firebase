// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAR81L9YOTKX0Y3tDVRiNgYqs1Shb_qXfc",
  authDomain: "freact-ee258.firebaseapp.com",
  projectId: "freact-ee258",
  storageBucket: "freact-ee258.appspot.com",
  messagingSenderId: "71931694527",
  appId: "1:71931694527:web:d5f49fd92273c3843fe50a",
  measurementId: "G-SS9VNP4LRL"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);
 const googleProvider = new  GoogleAuthProvider();
 const db = getFirestore(app);
  const storage = getStorage(app);
 export {auth , googleProvider , db,storage};

