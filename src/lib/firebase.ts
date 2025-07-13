import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Function to check if Firebase config is provided
export function isFirebaseConfigured() {
    return !!firebaseConfig.apiKey;
}

// Initialize Firebase only if the config is available
let app: FirebaseApp;
if (isFirebaseConfigured()) {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
} else {
    // Provide a dummy app or handle the unconfigured state appropriately.
    // For this case, we won't initialize `app`, and other parts of the code
    // will check `isFirebaseConfigured`.
}


// @ts-ignore
export { app };
