// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBzL5TGHCDJGkFSWaO8Ed8tgZFqrcWRtqo',
  authDomain: 'dragon-news-1aa6f.firebaseapp.com',
  projectId: 'dragon-news-1aa6f',
  storageBucket: 'dragon-news-1aa6f.firebasestorage.app',
  messagingSenderId: '725607966819',
  appId: '1:725607966819:web:076af1d39d8e5b23a67056',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
