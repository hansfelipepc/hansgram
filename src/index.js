import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';

firebase.initializeApp({
  apiKey: "AIzaSyDybYv0EBFUcIDyW6a-JYxddftfQeAr5Zs",
  authDomain: "hansgram-f2ffa.firebaseapp.com",
  databaseURL: "https://hansgram-f2ffa.firebaseio.com",
  storageBucket: "hansgram-f2ffa.appspot.com",
  messagingSenderId: "1078071733495"
});
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
