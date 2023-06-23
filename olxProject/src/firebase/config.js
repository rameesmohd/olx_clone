
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA1M-6vJyfYWTU_uiBoWxiNn5fmIi-csms",
  authDomain: "olx-projuct.firebaseapp.com",
  projectId: "olx-projuct",
  storageBucket: "olx-projuct.appspot.com",
  messagingSenderId: "305678282199",
  appId: "1:305678282199:web:ad104c0ccd9a0c0ce22f92",
  measurementId: "G-6QXEN5RBZN"
};

const firebase = initializeApp(firebaseConfig);

const db = getFirestore(firebase)
const storage = getStorage(firebase)

export {firebase,db,storage}