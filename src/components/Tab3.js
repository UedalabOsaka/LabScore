import React from 'react';
import firebase from '../Firebase';

class Tab3 extends React.Component {
    handleLogout = () => {
        firebase.auth().signOut();
    }
    render() {
        return (
            <div className="container d-flex">
                <div>
                    <a href='' onClick={this.handleLogout}>ログアウト</a>
                </div>

            </div>
        );
    }
}

export default Tab3;