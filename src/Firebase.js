import firebase from 'firebase/app';
import 'firebase/analytics'
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAk4G8YYVnhIsvMy3qu4BRzu0WaWsg6Mdc",
    authDomain: "labs-5c4aa.firebaseapp.com",
    projectId: "labs-5c4aa",
    storageBucket: "labs-5c4aa.appspot.com",
    messagingSenderId: "1096443071599",
    appId: "1:1096443071599:web:b035322e3a9b81cfd5919a",
    measurementId: "G-D925RTHX9R"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();

export default firebase;