/* eslint-disable max-len */
import React from 'react';
import { Route,  Switch } from 'react-router-dom';
import Header from '../header/Header';
import CharacterListContainer from '../../containers/CharacterListContainer';
import CharacterDetailContainer from '../../containers/CharacterDetailContainer';

export default function App() {
  return ( 
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <CharacterListContainer />
        </Route>
        <Route exact path="/:name">
          <CharacterDetailContainer />
        </Route>
      </Switch>
    </>
  );
}

