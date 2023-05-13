import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDhy_TLTBQCKFDTtuRPaa2CaLrt84cPEBo",
  authDomain: "auction-app-c939b.firebaseapp.com",
  projectId: "auction-app-c939b",
  storageBucket: "auction-app-c939b.appspot.com",
  messagingSenderId: "436337235177",
  appId: "1:436337235177:web:2abb2316164458205ccc78"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);