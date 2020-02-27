import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDroZ_TOQG82q0k9D21-ePXo3Oc7WHfFgw",
  authDomain: "healthcare-57dc2.firebaseapp.com",
  databaseURL: "https://healthcare-57dc2.firebaseio.com",
  projectId: "healthcare-57dc2",
  storageBucket: "healthcare-57dc2.appspot.com",
  messagingSenderId: "927587509053",
  appId: "1:927587509053:web:d1a1629eee5ab8ca31db54"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
