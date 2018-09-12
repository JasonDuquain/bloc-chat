import React, { Component } from 'react';
/// removed firebase import - not needed?!??


class User extends Component { 
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
    }
    

  componentDidMount(){
  	  this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    })
  }
    
    signIn(){
        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup(provider);
    }

    signOut(){
        this.props.firebase.auth().signOut();
      }

    render(){

        return(
            <div className="sign-in">
                <button onClick={() => this.signIn() }>Sign In</button>
                <button onClick={() => this.signOut()}>Sign Out</button>
                <p>{(this.props.activeUser) ? this.props.activeUser.displayName : 'guest'}</p>
            </div>
            )
    }

}

export default User; 