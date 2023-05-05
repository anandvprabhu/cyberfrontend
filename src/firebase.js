import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkAeTw7B2O8GPuoFwmo9aP41YKffeubRQ",
  authDomain: "ccas-93a68.firebaseapp.com",
  projectId: "ccas-93a68",
  storageBucket: "ccas-93a68.appspot.com",
  messagingSenderId: "767388681415",
  appId: "1:767388681415:web:ee697a09990027d5dfaae2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;