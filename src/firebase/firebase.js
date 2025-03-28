import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // ✅ Firestore Import kiya

// 🔥 Tera Firebase Config (Firebase Console se uthana)
const firebaseConfig = {
    apiKey: "AIzaSyCUYUOMAx3W7m_qdCynjUnUljijZyGaefU",
    authDomain: "ai-code-review-1f8f1.firebaseapp.com",
    projectId: "ai-code-review-1f8f1",
    storageBucket: "ai-code-review-1f8f1.firebasestorage.app",
    messagingSenderId: "581085394199",
    appId: "1:581085394199:web:f9c2bb8f74a214e5c6b352"
};

// 🔥 Firebase App Initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);  // ✅ Firestore Initialize kiya
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, db, googleProvider, githubProvider };
