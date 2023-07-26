import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.FIREBASE_DATABASEURL,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: "cse-bootcamp-auth.appspot.com",
  messagingSenderId: Number.parseInt(process.env.FIREBASE_MESSIGINGSENDERID),
  appId: process.env.FIREBASE_APPID
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);