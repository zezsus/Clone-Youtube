import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCY8SLyKA6W-re4a1sZ0uAQ645s5WP2sK4",
  authDomain: "not-ytb.firebaseapp.com",
  projectId: "not-ytb",
  storageBucket: "not-ytb.appspot.com",
  messagingSenderId: "526047220983",
  appId: "1:526047220983:web:4570d0c8d96595303d2ff2",
};

firebase.initializeApp(firebaseConfig);
export default firebase.auth();
