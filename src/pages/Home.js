import React from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';

class Home extends React.Component {
    state = {
        score: -1, 
    }
    handleLogout = () => {
        firebase.auth().signOut();
    }

    render() {
        const user=firebase.auth().currentUser;
        if (!user){
            return (<div></div>)
        }
        const db = firebase.firestore();
        

        db.collection("scores").doc(user.uid).get().then((doc) => {
            if (doc.exists) {
                this.setState({score:doc.data().score})
            } else {
                console.log('Error : document does not exist')
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

        return (
            <div className="container">
                <p>Welcome {user.displayName}</p>
                <p>Your Score is {this.state.score}</p>

                <br />
                <br />
                <Button onClick={this.handleLogout}>ログアウト</Button>
            </div>
        );
    }
}

export default Home;