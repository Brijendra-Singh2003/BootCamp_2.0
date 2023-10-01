import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCAD4rDcTvVYurj0y8t4MIeoBjXJWjiDhI",
  authDomain: "react-http-bb485.firebaseapp.com",
  databaseURL: "https://react-http-bb485-default-rtdb.firebaseio.com",
  projectId: "react-http-bb485",
  storageBucket: "react-http-bb485.appspot.com",
  messagingSenderId: "277021529270",
  appId: "1:277021529270:web:5de5c6023175993bd74217"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);