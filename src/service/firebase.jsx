import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "esanolatengoshop.firebaseapp.com",
  projectId: "esanolatengoshop",
  storageBucket: "esanolatengoshop.firebasestorage.app",
  messagingSenderId: "732963593967",
  appId: "1:732963593967:web:795d98d25552d401e4c51a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);