import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyC-hR0GozmJ36CqK4uDTbXfVxfvUZx9rf8",
    authDomain: "whatsapp-947a6.firebaseapp.com",
    projectId: "whatsapp-947a6",
    storageBucket: "whatsapp-947a6.appspot.com",
    messagingSenderId: "25699334963",
    appId: "1:25699334963:web:cc56daa7978ef15e2d5c46"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };