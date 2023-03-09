import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyC4jb2u8aPZyC6etcc3uqTDzeVS2fnRceA",
  authDomain: "photo-tagging-app-47531.firebaseapp.com",
  projectId: "photo-tagging-app-47531",
  storageBucket: "photo-tagging-app-47531.appspot.com",
  messagingSenderId: "170944932007",
  appId: "1:170944932007:web:d09392d5f7a5154bb21382"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, doc, getDocs, getDoc }