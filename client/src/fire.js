import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBMAeuQssHx1pAGUdgO_6v68c3zfWuTshg",
  authDomain: "tebu-25433.firebaseapp.com",
  projectId: "tebu-25433",
  storageBucket: "tebu-25433.appspot.com",
  messagingSenderId: "438243123222",
  appId: "1:438243123222:web:ccaed3859dbf35cf04d537",
  measurementId: "G-D36ECJKMM2",
}

const fire = firebase.initializeApp(firebaseConfig)

export default fire
