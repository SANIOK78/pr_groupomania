import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Accueil from '../../pages/Accueil';
import Connexion from '../../pages/Connexion';
import  Post from '../../pages/Post';

// La Navigation

const index = () => {
    return (       
        <Router>
            <Switch>
                <Route path="/" exact component={Accueil} />
                <Route path="/connexion" exact component={Connexion} />
                <Route path="/post" exact component={Post} />
                {/* <Redirect to="/" /> */}
            </Switch>
        </Router>
      
    );
};

export default index;