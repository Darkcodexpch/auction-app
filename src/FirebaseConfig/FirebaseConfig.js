import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC9sPC8V73doo-mCh39hKCmXeVOUQRUxwk",
  authDomain: "auction-app-653be.firebaseapp.com",
  projectId: "auction-app-653be",
  storageBucket: "auction-app-653be.appspot.com",
  messagingSenderId: "545800720600",
  appId: "1:545800720600:web:42c08cbc1f0227823807ad",
  measurementId: "G-CRRF4XSXX2"

});
let storage = firebaseApp.storage();
let storageRef =  storage.ref();
const db = firebaseApp.database();
const auth = firebaseApp.auth();
export{db,auth,storageRef}