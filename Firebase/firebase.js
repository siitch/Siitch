import { initializeApp, getApps } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";

const firebaseConfig = {
  apiKey: 'AIzaSyA0mAVUu-4GHPXCdBlqqVaky7ZloyfRARk',
  authDomain: 'siitch-6b176.firebaseapp.com',
  databaseURL: 'https://siitch-6b176.firebaseio.com',
  projectId: 'siitch-6b176',
  storageBucket: 'siitch-6b176.appspot.com',
  messagingSenderId: '282599031511',
  appId: '1:282599031511:web:bb4f5ca5c385550d8ee692',
  measurementId: 'G-13MVLQ6ZPF',
};

let app;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
}

const FirebaseRealtimeDatabase = getDatabase(app);

export { FirebaseRealtimeDatabase, ref, onValue, set };
