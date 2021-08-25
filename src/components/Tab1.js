import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { Card } from 'reactstrap';


class Tab1 extends React.Component {
    render() {
        return (
                <IonContent>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                            <IonCardTitle>Card Title</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            Keep close to Nature's heart... and break clear away, once in awhile,
                            and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </IonCardContent>
                    </IonCard>
                </IonContent>
        );

    }
};

export default Tab1;