import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAY37sNfXF65X9P8Sb_WKVH1-D5llMx710",
  authDomain: "clone-42297.firebaseapp.com",
  projectId: "clone-42297",
  storageBucket: "clone-42297.appspot.com",
  messagingSenderId: "46164656284",
  appId: "1:46164656284:web:f0836b465b579d73cd6d59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// auth().useDeviceLanguage();
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { db, auth, provider };
