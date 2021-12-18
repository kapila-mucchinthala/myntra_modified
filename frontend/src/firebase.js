import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
var firebaseConfig = {
   
    apiKey: "AIzaSyBLP2SnaVH6qKRh3-mKRadyr9YlCZDfBiI",
    authDomain: "myntra-modified.firebaseapp.com",
    projectId: "myntra-modified",
    storageBucket: "myntra-modified.appspot.com",
    messagingSenderId: "492490405540",
    appId: "1:492490405540:web:9eaff7e43c9a9c020b1831"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase