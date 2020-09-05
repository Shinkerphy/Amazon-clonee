import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCREyWIuCG4N4-HQM1VcFzAnsXXn6Tgf50",
        authDomain: "clone-160ca.firebaseapp.com",
        databaseURL: "https://clone-160ca.firebaseio.com",
        projectId: "clone-160ca",
        storageBucket: "clone-160ca.appspot.com",
        messagingSenderId: "797655153189",
        appId: "1:797655153189:web:1338b0b0f2844aba921dcc",
        measurementId: "G-V0H4JV9631"
});

const auth = firebase.auth();

export { auth };