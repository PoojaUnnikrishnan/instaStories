import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd8AjyfkcLqrTqyuLPr6O2cDd2wRF3H2M",
  authDomain: "instagram-d69fc.firebaseapp.com",
  projectId: "instagram-d69fc",
  storageBucket: "instagram-d69fc.appspot.com",
  messagingSenderId: "281813417530",
  appId: "1:281813417530:web:ad8168165cd9caa8517f03",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// const app = initializeApp(firebaseConfig);
export default firebase;
