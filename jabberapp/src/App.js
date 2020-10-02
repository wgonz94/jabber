import React from 'react';
import './App.css';

//import firebase technology
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';


//setup firebase
firebase.initializeApp({
  apiKey: "AIzaSyC5qo0mTehQFVZasrPjPeBk73hfZTjCQus",
  authDomain: "jabber-ab630.firebaseapp.com",
  databaseURL: "https://jabber-ab630.firebaseio.com",
  projectId: "jabber-ab630",
  storageBucket: "jabber-ab630.appspot.com",
  messagingSenderId: "935184498466",
  appId: "1:935184498466:web:51e09f771b741b74776f7b",
  measurementId: "G-R9X8K7HL60"
});


const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
