import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyft_FUpACzi5lola4JU3fh9KczPMnOuA",
  authDomain: "moneymind-316b9.firebaseapp.com",
  projectId: "moneymind-316b9",
  storageBucket: "moneymind-316b9.firebasestorage.app",
  messagingSenderId: "994347788712",
  appId: "1:994347788712:web:8caa940631835f6bd9559d",
  measurementId: "G-5G3XFVJBLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Auth service
const auth = getAuth(app);
const db = getFirestore(app); // Firestore database instance

// Export Firebase services
export { auth, db };