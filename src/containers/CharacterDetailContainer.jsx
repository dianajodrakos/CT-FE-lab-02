import React, { Component } from 'react';
import { getVillagerByName } from '../services/animalCrossingApi.jsx';
import Villager from '../components/villagers/Villager.jsx';

export default class CharacterDetailContainer extends Component {

  state = {
    loading: true,
    villager: []
  };

  componentDidMount() {
    getVillagerByName(this.props.match.params.name)
      .then(
        (villager) => this.setState(
          {
            loading: false, 
            villager
          })
      );
  }

  render() {
    const { loading, villager } = this.state;

    if(loading)
      return <h1>loading...</h1>;
      
    return <Villager
      id={villager.id}
      name={villager.name}
      image={villager.image}
      quote={villager.quote}
      style={villager.style}
      coffee={villager.coffee}
    />;
  }
}



