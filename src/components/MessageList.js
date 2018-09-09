import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.messagesRef = this.props.firebase.database().ref('Messages'); //changed messages to uppercase to match firebase db 
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
        console.log(this.props.activeRoom, this.state.messages);
        return (
            <section className="message-list">
               <h2>{this.props.activeRoom.name}</h2>
               <ul>
                   {this.state.messages.filter((el) => el.roomId === this.props.activeRoom.key).map((el, idx) =>(
                     <li key={idx}><div>
                                <div>User: {el.username}</div><div>Message: {el.content}</div>
                                </div></li>)

                    )}
               </ul>
			       </section>
        );
    }
    
    
}

export default MessageList;
