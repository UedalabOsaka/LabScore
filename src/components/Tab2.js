import React from 'react';

class Tab2 extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="mx-auto" style={{ width: 400, background: '#eee', padding: 20, marginTop: 60 }}>
                    <p>{this.props.username}</p>
                </div>
            </div>
        );
    }
}

export default Tab2;