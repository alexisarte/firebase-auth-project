// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js';
// TODO: Add SDKs for Firebase products that you want to use
import {getAuth} from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC8DO2xJIocSauhajw6FZ-uIVZXLUUGjRI',
  authDomain: 'fir-app-tuto-b2e1b.firebaseapp.com',
  projectId: 'fir-app-tuto-b2e1b',
  storageBucket: 'fir-app-tuto-b2e1b.appspot.com',
  messagingSenderId: '747237134691',
  appId: '1:747237134691:web:c511568c96d36e9d040356',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);