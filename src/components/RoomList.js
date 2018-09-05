import React, { Component } from 'react';

class RoomList extends Component {
    constructor(props) {
        super(props);
        this.roomsRef = this.props.firebase.database().ref('rooms');
        this.showModal = this.showModal.bind(this);
        this.createRoom = this.createRoom.bind(this);
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
    
    showModal() {
        document.querySelector('.roomlist__modal').classList.add('show');
    }
    
    // ***20180904 - enter more validation in future and also validate new room doesnt already exist - this might be part of a future checkpoint so not yet ***20180905 - remove modal box after new room is created
    createRoom(e) {
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
                <button className="roomlist__sidebar-btn" onClick={this.showModal}>New room</button>
               <ul className="roomlist__list">
                  {
                       this.state.rooms.map((el, idx) => <li key={el.key} className="roomlist__item">{el.name}</li>)
                  }
               </ul>
            </div>
            <div className="roomlist__main">
                 <div className="roomlist__modal">
                     <h3>Create new room</h3>
                    <form className="roomlist__form" onSubmit={this.createRoom}>
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
