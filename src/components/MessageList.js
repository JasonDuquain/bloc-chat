import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.messagesRef = this.props.firebase.database().ref('messages');
        this.state = {
            messages: []
        }
    }
    
    componentDidMount() {
       this.messagesRef.on('child_added', snapshot => {
           const message = snapshot.val();
           message.key = snapshot.key;
           this.setState({ messages: this.state.messages.concat( message ) });
           
       });
   }
    
    render() {
        return (
            <div>hay</div>
        );
    }
    
    
}

export default MessageList;


