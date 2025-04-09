// firebase_harb.js
import { initializeApp, getApp } from "firebase/app"; // Added getApp import
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAs4k0nJoHDwhY9uFyJgY-Jdi-EKYSaUBU",
  authDomain: "sem6-46331.firebaseapp.com",
  databaseURL: "https://sem6-46331-default-rtdb.firebaseio.com",
  projectId: "sem6-46331",
  storageBucket: "sem6-46331.firebasestorage.app",
  messagingSenderId: "734712727801",
  appId: "1:734712727801:web:767d2cd952e5c05a563a28",
  measurementId: "G-4SY4XHT3MN"
};

// Initialize Firebase only if it hasn't been initialized already
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (err) {
  // App already exists, use that one
  app = getApp(); // Now properly imported
}

const database = getDatabase(app);

export { database };