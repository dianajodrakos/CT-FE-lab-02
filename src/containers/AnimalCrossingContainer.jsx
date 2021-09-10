import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { getVillagers } from '../services/animalCrossingApi.jsx';
import VillagerList from '../components/villagers/VillagerList.jsx';
import Villager from '../components/villagers/Villager.jsx';

export default class AnimalCrossingContainer extends Component {

  state = {
    loading: true,
    villagers: []
  };

  componentDidMount() {
    getVillagers()
      .then(
        (villagers) => this.setState(
          {
            villagers,
            loading: false 
          })
      );
  }

  render() {

    const { loading, villagers } = this.state;

    if(loading)
      return <h1>loading...</h1>;
      
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={ () =>
            <VillagerList villagers={villagers} />
          } />
          <Route exact path="/:name" render={ () =>
            <Villager villagers={villagers}/>
          } />

      
      
        </Switch>
      </Router>
    );
  }
}


