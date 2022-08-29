import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBd0PL-fpekb0p2qGG1WGb_36A4mHEst_o",
    authDomain: "login-1c3c9.firebaseapp.com",
    projectId: "login-1c3c9",
    storageBucket: "login-1c3c9.appspot.com",
    messagingSenderId: "402541490663",
    appId: "1:402541490663:web:82334d57f024a176f4cd42"
};

const fire = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, fire as default
}