import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAt5GQBkS-roJ3_mDrBclfy4WWHteBqw_E",
    authDomain: "reactnative-8f0c1.firebaseapp.com",
    databaseURL: "https://reactnative-8f0c1.firebaseio.com",
    projectId: "reactnative-8f0c1",
    storageBucket: "reactnative-8f0c1.appspot.com",
    messagingSenderId: "28954736726"
  };
  export const firebaseApp = firebase.initializeApp(config);