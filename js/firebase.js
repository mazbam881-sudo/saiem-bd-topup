// Firebase App
import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

// Firebase Authentication
import { getAuth }
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Firebase Firestore
import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// Firebase Config

const firebaseConfig = {

  apiKey: "AIzaSyBY7iqRSD8AXjbbxlYjcx2AsjazL-aBzlw",

  authDomain: "saiem-bd-top-up.firebaseapp.com",

  projectId: "saiem-bd-top-up",

  storageBucket: "saiem-bd-top-up.firebasestorage.app",

  messagingSenderId: "152724366462",

  appId: "1:152724366462:web:762aed025a6d29922da42f"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Services

const auth = getAuth(app);

const db = getFirestore(app);


// Export

export { auth, db };