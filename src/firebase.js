import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Replace with your Firebase configuration
  apiKey: "AIzaSyA15z2CV4xzF0Dj6bdIUOQybpRpY9LS2zg",
  authDomain: "feedback-feature.firebaseapp.com",
  projectId: "feedback-feature",
  storageBucket: "feedback-feature.firebasestorage.app",
  messagingSenderId: "125477970585",
  appId: "1:125477970585:web:c82411c05ac2a258540e08"  
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;