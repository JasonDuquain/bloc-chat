import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.messagesRef = this.props.firebase.database().ref('Messages'); //changed messages to uppercase to match firebase db 
        this.handleCreateMessage = this.handleCreateMessage.bind(this);
        this.state = {
            messages: [],
            content: "",
        }
    }
    
    componentDidMount() {
       this.messagesRef.on('child_added', snapshot => {
           const message = snapshot.val();
           message.key = snapshot.key;
           this.setState({ messages: this.state.messages.concat( message ) });
           
       });
   }
    
    handleCreateMessage(e) {
        e.preventDefault();
        //this.setState({messages: []})
        const messageName = e.target.elements.message_input.value;
        if (messageName) {
            console.log(messageName);
              this.messagesRef.push({
              content: messageName,
              username: (this.props.activeUser) ? this.props.activeUser.displayName : 'guest',
              roomId: this.props.activeRoom.key
            });
            e.target.elements.message_input.value = '';
        } else {
            alert('please enter a message');
        }
    }
    
    render() {
        
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
                <div className="create-message">
                    <form className="message__form" onSubmit={this.handleCreateMessage}>

                    <input type="text" placeholder="Write your message here..." name="message_input" />

                    <input type="submit" value="send" />
                    </form>
			     </div>
			 </section>
        );
    }
    
    
}

export default MessageList;
