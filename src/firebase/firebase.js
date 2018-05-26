import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyACBSawaaXnSGICKxNyRTQgwbZidzYa2Mc",
  authDomain: "todoapp-v1-30c9d.firebaseapp.com",
  databaseURL: "https://todoapp-v1-30c9d.firebaseio.com",
  projectId: "todoapp-v1-30c9d",
  storageBucket: "",
  messagingSenderId: "879020070450"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
