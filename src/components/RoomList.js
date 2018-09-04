import React, { Component } from 'react';

class RoomList extends Component {
    constructor(props) {
        super(props);
        this.roomsRef = this.props.firebase.database().ref('rooms');
        this.state = {
            rooms: []
        };
        
    }
    
    componentDidMount() {
       this.roomsRef.on('child_added', snapshot => {
           const room = snapshot.val();
           room.key = snapshot.key;
           this.setState({ rooms: this.state.rooms.concat( room ) })
       });
   }
    
  render() {
    return (
        <div className="roomlist">
            <div className="roomlist__sidebar">
                <h2 className="roomlist__sidebar-heading">Bloc Chat</h2>
               <ul className="roomlist__list">
                  {
                       this.state.rooms.map((el, idx) => <li key={el.key} className="roomlist__item">{el.name}</li>)
                  }
               </ul>
            </div>
            <div className="roomlist__main"></div>
        </div>
    );
  }
}

export default RoomList;
