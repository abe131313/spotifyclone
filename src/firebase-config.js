import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDwLC03kuFqmrej_taZkdLfUc8SWSeK6G0",
    authDomain: "spotify-clone-app-dceb7.firebaseapp.com",
    projectId: "spotify-clone-app-dceb7",
    storageBucket: "spotify-clone-app-dceb7.appspot.com",
    messagingSenderId: "54212214775",
    appId: "1:54212214775:web:89d1adf56626655eb9b8f2",
    measurementId: "G-45XPBCKXPQ"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);