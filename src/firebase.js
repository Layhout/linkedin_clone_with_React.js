import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB88cHsfXcOyz761QPq0_4oSKOJ9BZ0UlI",
  authDomain: "test-with-react-5c0ff.firebaseapp.com",
  databaseURL: "https://test-with-react-5c0ff-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-with-react-5c0ff",
  storageBucket: "test-with-react-5c0ff.appspot.com",
  messagingSenderId: "251317291067",
  appId: "1:251317291067:web:d30c4883769b905d83341e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
