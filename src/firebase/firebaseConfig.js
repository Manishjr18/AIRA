import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Firestore Import kiya

const firebaseConfig = {
  apiKey: "AIzaSyCUYUOMAx3W7m_qdCynjUnUljijZyGaefU",
  authDomain: "ai-code-review-1f8f1.firebaseapp.com",
  projectId: "ai-code-review-1f8f1",
  // storageBucket: "ai-code-review-1f8f1.appspot.com", // ✅ Fixed Storage Bucket
  storageBucket: "ai-code-review-1f8f1.firebasestorage.app",
  messagingSenderId: "581085394199",
  appId: "1:581085394199:web:f9c2bb8f74a214e5c6b352",
};

// ✅ Check if Firebase is already initialized
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); // ✅ Firestore Initialize kiya
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
