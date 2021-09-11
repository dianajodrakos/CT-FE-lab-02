import React, { Component } from 'react';
// import { getVillagers } from '../services/animalCrossingApi.jsx';
// import VillagerList from '../components/villagers/VillagerList.jsx';

export default class CharacterDetailContainer extends Component {

  state = {
    loading: true,
    villager: []
  };

  // componentDidMount() {
  //   getVillagerByName()
  //     .then(
  //       (villagers) => this.setState(
  //         {
  //           villagers,
  //           loading: false 
  //         })
  //     );
  // }

  render() {
    // const { loading, villager } = this.state;

    // if(loading)
    //   return <h1>loading...</h1>;
      
    // return <VillagerList villager={villager} />;
    return <h1>detail page</h1>;
  }
}



