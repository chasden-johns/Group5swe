import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT0oupThEiEsB2pmlpiwphjXL9q-mgnc0",
  authDomain: "moneymind-8c564.firebaseapp.com",
  projectId: "moneymind-8c564",
  storageBucket: "moneymind-8c564.firebasestorage.app",
  messagingSenderId: "980067656226",
  appId: "1:980067656226:web:5d35b4397d0665ece7a07b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Auth service
const auth = getAuth(app);
const db = getFirestore(app); // Firestore database instance

// Export Firebase services
export { auth, db };