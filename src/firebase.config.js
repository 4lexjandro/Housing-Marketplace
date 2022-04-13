
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyAB6U-SGO-0ktGgUu3CIHpk5KhCzXmfdQM",
  authDomain: "house-marketplace-app-c44d1.firebaseapp.com",
  projectId: "house-marketplace-app-c44d1",
  storageBucket: "house-marketplace-app-c44d1.appspot.com",
  messagingSenderId: "549678831404",
  appId: "1:549678831404:web:fa7da5425f395d3e6d3e89"
};

// Initialize Firebase

initializeApp(firebaseConfig)
export const db = getFirestore()