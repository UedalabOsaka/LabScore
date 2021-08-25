
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import { Redirect, Route } from 'react-router-dom';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';


/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from '@ionic/react';


import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';

import { BrowserRouter as Router, Switch, } from 'react-router-dom';


import firebase from './Firebase';

import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

//import Profile from './pages/Profile';
import SignInOrUp from './pages/SignInOrUp';
import SignUp from './pages/SignUp';

import Auth from './Auth';



class AuthedContents extends React.Component {
    state = {
        score: -2,
        displayName: 'anymous',
        friends:{},
    };
    setUsers =  () =>{
        const db = firebase.firestore();
        const user = firebase.auth().currentUser;
        if (user) {
            let friends = {};
            db.collection('scores').get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.id == user.uid) {
                        this.setState({ score: doc.data().score, displayName: user.displayName })
                    } else {
                        friends[doc.id]=doc.data()
                    }
                });
                this.setState({friends:friends});
            });
        }
    }
    
    componentDidMount = () => {
        this.setUsers()
    }
    
    render() {
        return (
            <Switch>
                <IonTabs>
                    <IonRouterOutlet>
                        <Route exact path="/tab1">
                            <Tab1 score={this.state.score} username={this.state.displayName} />
                        </Route>
                        <Route exact path="/tab2">
                            <Tab2 friends={this.state.friends} />
                        </Route>
                        <Route exact path="/tab3">
                            <Tab3 />
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/tab1" />
                        </Route>
                    </IonRouterOutlet>
                    <IonTabBar slot="bottom">
                        <IonTabButton tab="tab1" href="/tab1">
                            <IonIcon icon={triangle} />
                            <IonLabel>Tab 1</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="tab2" href="/tab2">
                            <IonIcon icon={ellipse} />
                            <IonLabel>Tab 2</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="tab3" href="/tab3">
                            <IonIcon icon={square} />
                            <IonLabel>Tab 3</IonLabel>
                        </IonTabButton>
                    </IonTabBar>
                </IonTabs>
            </Switch>
        )
    }
}

class App extends React.Component {

    render() {
        return (
            <IonPage>
                {/*<IonHeader>
                    <IonToolbar>
                        <IonTitle>TItle</IonTitle>
                    </IonToolbar>
                </IonHeader >*/}
                <Router>
                    <Switch>
                        <Route exact path="/signin" component={SignInOrUp} />
                        <Route exact path="/signup" component={SignUp} />
                        {/* 以下認証のみ */}
                        <Auth>
                            <AuthedContents />
                        </Auth>
                    </Switch>
                </Router>
            </IonPage >
        );
    }
}

export default App;