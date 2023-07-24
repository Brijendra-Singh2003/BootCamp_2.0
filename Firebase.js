import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = {
  apiKey: "AIzaSyAjNrP-gRH1mgf-KAbDtzqm4_IYnv60x6A",
  authDomain: "cse-bootcamp-auth.firebaseapp.com",
  databaseURL: "https://cse-bootcamp-auth-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cse-bootcamp-auth",
  storageBucket: "cse-bootcamp-auth.appspot.com",
  messagingSenderId: 636818343523,
  appId: "1:636818343523:web:903918bc57e6ff5692da56"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);