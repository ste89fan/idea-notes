import firebase from "../node_modules/firebase/app";
import "../node_modules/firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDZh59xPM1rBKdNQS2SoUSYARGIqrlgsd0",
    authDomain: "ideas-notes-app.firebaseapp.com",
    databaseURL: "https://ideas-notes-app.firebaseio.com",
    projectId: "ideas-notes-app",
    storageBucket: "ideas-notes-app.appspot.com",
    messagingSenderId: "630664504916",
    appId: "1:630664504916:web:66e2e33c7fdaabb63dafc1",
    measurementId: "G-H5HN7KFKNS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebaseConfig;