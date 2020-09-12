import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyDj80PNyrrB11-ew2bTVxZOqrQy_gbBPVI",
    authDomain: "tutornet-1.firebaseapp.com",
    databaseURL: "https://tutornet-1.firebaseio.com",
    projectId: "tutornet-1",
    storageBucket: "tutornet-1.appspot.com",
    messagingSenderId: "905374613736",
    appId: "1:905374613736:web:316745167666586c39895d"
    
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider };
  export default db;
