import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import CharacterListContainer from '../../containers/CharacterListContainer';
import CharacterDetailContainer from '../../containers/CharacterDetailContainer';

export default function App() {
  return ( 
    <Router>
      <Switch>
        <Route exact path="/" component={CharacterListContainer} />
        <Route exact path="/:name" component={CharacterDetailContainer} />
      </Switch>
    </Router>);
}

