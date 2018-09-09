import React, { Component } from 'react';

class RoomList extends Component {
    constructor(props) {
        super(props);
        this.roomsRef = this.props.firebase.database().ref('rooms');
        this.handleModal = this.handleModal.bind(this);
        this.handleCreateRoom = this.handleCreateRoom.bind(this);
        //this.handleActiveRoom = this.handleActiveRoom.bind(this);
        this.state = {
            rooms: []
        };
        
    }
    
    componentDidMount() {
       this.roomsRef.on('child_added', snapshot => {
           const room = snapshot.val();
           room.key = snapshot.key;
           this.setState({ rooms: this.state.rooms.concat( room ) });
           
       });
   }
    
    handleModal() {
        document.querySelector('.roomlist__modal').classList.add('show');
    }
    
    handleCreateRoom(e) {
        e.preventDefault();
        const roomName = e.target.elements.roomlist_input.value
        if (roomName) {
              this.roomsRef.push({
              name: roomName
            });
            document.querySelector('.roomlist__modal').classList.remove('show');
        } else {
            alert('please enter a room name');
        }
    }
    
   
  render() {
    return (
        <div className="roomlist">
            <div className="roomlist__sidebar">
                <h2 className="roomlist__sidebar-heading">Bloc Chat</h2>
                <button className="roomlist__sidebar-btn" onClick={this.handleModal}>New room</button>
               <ul className="roomlist__list">
                  {
                       this.state.rooms.map((el, idx) => 
                           <li key={el.key} className="roomlist__item" onClick={ () => this.props.setRoom(el)}>{el.name}</li>)
                  }
               </ul>
                <div className="roomlist__modal">
                     <h3>Create new room</h3>
                    <form className="roomlist__form" onSubmit={this.handleCreateRoom}>
                        <label htmlFor="roomlist_input">Enter a room Name</label>
                        <input type="text" id="roomlist_input" name="roomlist_input"/>
                        <button>Cancel</button>
                        <button>Create Room</button>
                    </form>
                </div>   
            </div>
                 
        </div>
    );
  }
}

export default RoomList;



