import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User.js';

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
            activeRoom: "",
            activeUser: ""
        };
    }
    
    setRoom(room) {
        this.setState({ activeRoom: room });
    }
    
    setUser(user) {
        this.setState({ activeUser: user });
        console.log(this.state.activeUser)
    }
    
  render() {
    return (
      <div className="App">
        <User firebase={firebase} activeUser={this.state.activeUser} setUser={this.setUser.bind(this)} />
        <RoomList firebase={firebase} activeRoom={this.state.activeRoom} setRoom={this.setRoom.bind(this)} />
        <MessageList firebase={firebase} activeRoom={this.state.activeRoom}/>
      </div>
        
    );
  }
}

export default App;

