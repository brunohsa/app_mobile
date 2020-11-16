import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC9gp1Qkf4NzSqc1fLEWYgLmaffuUN-5YA",
    authDomain: "appetite-679aa.firebaseapp.com",
    databaseURL: "https://appetite-679aa.firebaseio.com",
    projectId: "appetite-679aa",
    storageBucket: "appetite-679aa.appspot.com",
    messagingSenderId: "842337758798",
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();