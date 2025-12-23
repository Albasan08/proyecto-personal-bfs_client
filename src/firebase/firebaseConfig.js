// IMPORTACIONES DE TERCEROS
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// IMPORTACIONES PROPIAS
// VARIABLES DE CONFIGURACIÓN DE FIREBASE
const APIKEY_FIREBASE = import.meta.env.VITE_APIKEY_FIREBASE;
const AUTHDOMAIN_FIREBASE = import.meta.env.VITE_AUTHDOMAIN_FIREBASE;
const PROJECTID_FIREBASE = import.meta.env.VITE_PROJECTID_FIREBASE;
const STORAGEBUCKET_FIREBASEE = import.meta.env.VITE_STORAGEBUCKET_FIREBASE;
const VITE_MESSAGINGSENDERID_FIREBASE = import.meta.env.VITE_MESSAGINGSENDERID_FIREBASE;
const APPID_FIREBASE = import.meta.env.VITE_APPID_FIREBASE;

// CONFIGURACIÓN APP DE GOOGLE
const firebaseConfig = {
  apiKey: APIKEY_FIREBASE,
  authDomain: AUTHDOMAIN_FIREBASE,
  projectId: PROJECTID_FIREBASE,
  storageBucket: STORAGEBUCKET_FIREBASEE,
  messagingSenderId: VITE_MESSAGINGSENDERID_FIREBASE,
  appId: APPID_FIREBASE
};

// INICIALIZAR FIREBASE
const app = initializeApp(firebaseConfig);
//console.log(app);

// EXPORTACIONES
export const auth = getAuth(app);
export const db = getFirestore(app); // Firestore
export default app;
