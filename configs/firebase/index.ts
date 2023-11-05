// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAB6z1vD_vmhp68mhq_umKrCnm2Db-prH8',
  authDomain: 'manager-court.firebaseapp.com',
  projectId: 'manager-court',
  storageBucket: 'manager-court.appspot.com',
  messagingSenderId: '337338938605',
  appId: '1:337338938605:web:798888b2c55d5e577608e4',
  measurementId: 'G-7SWCJL4G6H',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
