import React, { Component } from 'react';
import { getVillagers } from '../services/animalCrossingApi.jsx';
import VillagerList from '../components/villagers/VillagerList.jsx';

export default class AnimalCrossingContainer extends Component {
  state = {
    loading: true,
    villagers: []
  };

  componentDidMount() {
    getVillagers()
      .then((villagers) => this.setState({ villagers, loading: false }));
  }

  render() {
    console.log(this.state);
    
    const { loading, villagers } = this.state;

    if(loading)
      return <h1>loading...</h1>;
      
    return <VillagerList villagers={villagers} />;
  }
}


