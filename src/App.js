import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';

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
    constructor(props) {
        super(props);
        this.handleActiveRoom = this.handleActiveRoom.bind(this);
        this.state = {
            activeRoom: {}
        };
    }
    
    handleActiveRoom(room) {
        console.log(room);
    }
    
  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase} activeRoom={this.state.activeRoom} handleActiveRoom={this.handleActiveRoom.bind(this)} />
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom}/>
      </div>
        
    );
  }
}

export default App;



