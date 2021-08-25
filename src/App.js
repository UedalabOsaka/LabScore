
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

import { BrowserRouter as Router, Switch, } from 'react-router-dom';
//screens
import Home from './pages/Home';
//import Profile from './pages/Profile';
import SignInOrUp from './pages/SignInOrUp';
import SignUp from './pages/SignUp';

import Auth from './Auth';

class App extends React.Component {
    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>TItle</IonTitle>
                    </IonToolbar>
                </IonHeader >
                <Router>
                    <Switch>
                        <Route exact path="/signin" component={SignInOrUp} />
                        <Route exact path="/signup" component={SignUp} />
                        {/* 以下認証のみ */}
                        <Auth>
                            <Switch>
                                {/*<Route exact path="/" component={Home} />*/}
                                {/*<Route exact path="/profile" component={Profile} />*/}
                                <Route component={Home} />
                            </Switch>
                        </Auth>
                    </Switch>
                </Router>
            </IonPage >
        );
    }
}

export default App;