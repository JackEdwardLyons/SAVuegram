import firebase from 'firebase'
import 'firebase/firestore'

// firebase init goes here
const config = {
    apiKey: "AIzaSyANP1F-x1blg95WhQO0mFleKBQO4im5zMU",
    authDomain: "vuegram-a69bc.firebaseapp.com",
    databaseURL: "https://vuegram-a69bc.firebaseio.com",
    projectId: "vuegram-a69bc",
    storageBucket: "",
    messagingSenderId: "820660589478"
};

firebase.initializeApp(config)

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

// date issue fix according to firebase
const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)

// firebase collections
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

export {
    db,
    auth,
    currentUser,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}
