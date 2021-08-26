import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonInput } from '@ionic/react';
import { useParams } from 'react-router';

import firebase from '../Firebase';




function SendPoints(props) {

    
    let state={
        loading:false
    }
    function handleSubmit(e){
        e.preventDefault();
        
        const giving_score=Number(document.getElementById('score').value)　//だれかいい感じに直してください
        
        const db = firebase.firestore();
        const me = firebase.auth().currentUser;
        if(!me){
            window.alert('try again!')
            return
        }


        db.collection("scores").doc(friend_id).set({
            score: friend.score+giving_score,
        },{ merge: true })
        .then(() => {
            db.collection("scores").doc(me.uid).set({
                score: props.myscore-giving_score,
            },{ merge: true })
            .then(() => {
                window.alert('success!')
            })
            .catch((error) => {
                window.alert(error)
                console.error("Error writing document: ", error);
            });

        })
        .catch((error) => {
            window.alert(error)
            console.error("Error writing document: ", error);
        });
        
    }
    
    

    const params = useParams();
    const friend_id = params.id
    console.log(props.friends)
    console.log(props.friends['SVjKezHSUeOF9C6Q1VIWg7ZsqbA2'])
    const friend = props.friends[friend_id]

    return (
        <IonContent>
            <IonGrid className="ion-justify-content-center">
                <IonRow className="ion-align-items-center">
                    <IonCol>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardSubtitle>Send your point to </IonCardSubtitle>
                                <IonCardTitle>{friend ? friend.username : ''}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <form onSubmit={handleSubmit}>
                                    <IonItem>
                                        <IonInput type='number' id='score' placeholder="Points to send"></IonInput>
                                    </IonItem>
                                    <button color="success" type="submit" disabled={state.loading}>
                                        Send!
                                    </button>
                                </form>
                            </IonCardContent>
                        </IonCard>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default SendPoints;
