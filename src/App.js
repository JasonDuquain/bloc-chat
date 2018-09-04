import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDoW24A-O4jRrudITEArMU-unPkb6IzfJU",
    authDomain: "bloc-chat-c1757.firebaseapp.com",
    databaseURL: "https://bloc-chat-c1757.firebaseio.com",
    projectId: "bloc-chat-c1757",
    storageBucket: "bloc-chat-c1757.appspot.com",
    messagingSenderId: "74606303882"
  };
  firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase} />
      </div>
        
    );
  }
}

export default App;
