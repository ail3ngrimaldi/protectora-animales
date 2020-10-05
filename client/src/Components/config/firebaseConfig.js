import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAt59iskNq8lNrlngI_waNKdgi8t2cKgDU",
    authDomain: "protectoraanimales-9c9db.firebaseapp.com",
    databaseURL: "https://protectoraanimales-9c9db.firebaseio.com",
    projectId: "protectoraanimales-9c9db",
    storageBucket: "protectoraanimales-9c9db.appspot.com",
    messagingSenderId: "1086332164987",
    appId: "1:1086332164987:web:b2d086178b65c85b793bde"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.store();

  export default firebase