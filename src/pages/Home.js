import React from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

import { Button } from 'reactstrap';

class Home extends React.Component {

    handleLogout = () => {
        firebase.auth().signOut();
    }

    render() {
        const username=firebase.auth().currentUser.displayName;
        return (
            <div className="container">
                <p>Welcome {username}</p>
                <br />
                <br />
                <Button onClick={this.handleLogout}>ログアウト</Button>
            </div>
        );
    }
}

export default Home;