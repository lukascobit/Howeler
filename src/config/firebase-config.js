import firebase from "firebase"

const firebaseConfig = {

    apiKey: "AIzaSyDaI-TMP-0uetfSB8Q7a-Ky1S6bCh52dd8",

    authDomain: "log1-322215.firebaseapp.com",

    projectId: "log1-322215",

    storageBucket: "log1-322215.appspot.com",

    messagingSenderId: "49533283593",

    appId: "1:49533283593:web:1ad374bc72dffb0cac37d8",

    measurementId: "G-34CDM1WYED"

  };

    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);

    firebase.analytics();
  

export default firebase;