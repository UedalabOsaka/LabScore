import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';


class Tab1 extends React.Component {
    render() {
        return (
                <IonContent>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle>{this.props.username}</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            <IonCardTitle>score  {this.props.score}</IonCardTitle>
                        </IonCardContent>
                    </IonCard>
                </IonContent>
        );

    }
};

export default Tab1;