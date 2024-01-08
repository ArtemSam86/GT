// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

interface IFirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

type FirebaseConfigType = Partial<IFirebaseConfig>;

// Your web app's Firebase configuration
const firebaseConfig: FirebaseConfigType = {
  apiKey: "AIzaSyAhyevUlnLwemSHVVFw4YL4IGwZNKj8BS8",
  authDomain: "global-testing-2024.firebaseapp.com",
  projectId: "global-testing-2024",
  storageBucket: "global-testing-2024.appspot.com",
  messagingSenderId: "524076645945",
  appId: "1:524076645945:web:70ab1e691d488187d357e8"
};

// const firebaseConfig: IFirebaseConfig = {
//   apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
//   authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.VUE_APP_FIREBASE_APP_ID,
//   measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();


export { app, auth };
