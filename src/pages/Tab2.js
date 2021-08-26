import React,{ useState } from 'react';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';

import { IonModal, IonButton,  } from '@ionic/react';



function FriendsList(props) {
    const friends = props.friends;
    console.log(Object.keys(friends).length)
    if (Object.keys(friends).length) {
        const friendsItems = Object.keys(friends).map((id) =>
            <IonItem key={id} routerLink={`/send/${id}`} detail>
                <IonLabel>{friends[id].username}({friends[id].score})</IonLabel>
            </IonItem>
        );
        return (
            <IonList>{friendsItems}</IonList>
        );
    }
    return <ul></ul>
}

class Tab2 extends React.Component {
    render() {
        console.log(this.props.friends)
        return (
            <IonContent>
                <FriendsList friends={this.props.friends}></FriendsList>
            </IonContent>
        );
    }
}

export default Tab2;