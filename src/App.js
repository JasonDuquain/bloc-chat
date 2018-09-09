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
        this.setRoom = this.setRoom.bind(this);
        this.state = {
            activeRoom: ""
        };
    }
    
    setRoom(room) {
        console.log(room);
        this.setState({ activeRoom: room });
        console.log(this.state.activeRoom) //setState is async so this may not update right away
    }
    
  render() {
    return (
      <div className="App">
        <RoomList firebase={firebase} activeRoom={this.state.activeRoom} setRoom={this.setRoom.bind(this)} />
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom}/>
      </div>
        
    );
  }
}

export default App;



/* 20180909 - changed handleActiveRoom to setRoom*/
