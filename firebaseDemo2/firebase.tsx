import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB8gcm9FvFt80PeIRXyWDOmLUQde5xFz2g",
    authDomain: "patika-edcaf.firebaseapp.com",
    databaseURL: "https://patika-edcaf-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "patika-edcaf",
    storageBucket: "patika-edcaf.appspot.com",
    messagingSenderId: "32963551970",
    appId: "1:32963551970:web:35ed3e6d6ac44ad971b4bb"
}

firebase.initializeApp(firebaseConfig)

firebase.firestore()

export default firebase