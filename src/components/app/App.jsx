/* eslint-disable max-len */
import React from 'react';
import {  Route,  Switch } from 'react-router-dom';
import CharacterListContainer from '../../containers/CharacterListContainer';
import CharacterDetailContainer from '../../containers/CharacterDetailContainer';
import Header from '../header/Header';

export default function App() {
  return ( 
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={CharacterListContainer} />
        <Route exact path="/:name" component={CharacterDetailContainer} />
      </Switch>
    </>
  );
}

