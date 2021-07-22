import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCwJOGTt7JaT62fafd7FWS2mKW8YnsFBB0",
    authDomain: "linkedin-clone-365d9.firebaseapp.com",
    projectId: "linkedin-clone-365d9",
    storageBucket: "linkedin-clone-365d9.appspot.com",
    messagingSenderId: "683745168802",
    appId: "1:683745168802:web:f4a7d461f761f3aaf936fb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };