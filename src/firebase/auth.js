import { auth, db, googleProvider, githubProvider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, getDoc} from "firebase/firestore";

// 🔥 Google Login (Only if user already exists)
export const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    // ✅ Check if user exists in Firestore
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      console.log("✅ User exists, logging in...");
      return { success: true, user: userSnap.data() };
    } else {
      console.log("❌ User does not exist, ask to Signup first.");
      return { success: false, message: "Please sign up first!" };
    }
  } catch (error) {
    console.error("Google Login Error:", error);
    return { success: false, message: error.message };
  }
};

// 🔥 GitHub Login (Only if user already exists)
export const handleGitHubLogin = async () => {
  try {
    const result = await signInWithPopup(auth, githubProvider);
    const user = result.user;

    // ✅ Check if user exists in Firestore
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      console.log("✅ User exists, logging in...");
      return { success: true, user: userSnap.data() };
    } else {
      console.log("❌ User does not exist, ask to Signup first.");
      return { success: false, message: "Please sign up first!" };
    }
  } catch (error) {
    console.error("GitHub Login Error:", error);
    return { success: false, message: error.message };
  }
};
