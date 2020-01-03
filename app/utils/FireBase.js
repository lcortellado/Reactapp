import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAxg8WIFoECqBiUYL9aIeq4QGSLxvpz1h0",
    authDomain: "restaurants-e7bff.firebaseapp.com",
    databaseURL: "https://restaurants-e7bff.firebaseio.com",
    projectId: "restaurants-e7bff",
    storageBucket: "restaurants-e7bff.appspot.com",
    messagingSenderId: "1046878426593",
    appId: "1:1046878426593:web:7b4f856b693772e6526ea0"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);