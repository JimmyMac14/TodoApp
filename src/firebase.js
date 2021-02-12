// For Firebase JS SDK v7.20.0 and later, measurementId is optional


  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyAp8tXoMTNafRrUgOJV6_BNm256WTN9gxI",
      authDomain: "todo-app-dd18e.firebaseapp.com",
      projectId: "todo-app-dd18e",
      storageBucket: "todo-app-dd18e.appspot.com",
      messagingSenderId: "657851965091",
      appId: "1:657851965091:web:f1dac64e4e66cc8bd5a916",
      measurementId: "G-EY64S4P2PE"
  });

  const db = firebaseApp.firestore();

  export default db;