import React from 'react';

class Tab1 extends React.Component {
    render() {
        return (
            <div className="container d-flex">
                <div className="mx-auto" style={{ width: 400, background: '#eee', padding: 20, marginTop: 60 }}>
                    <p>{this.props.username}</p>
                    <h1>Score : {this.props.score}</h1>
                </div>
            </div>
        );
    }
}

export default Tab1;