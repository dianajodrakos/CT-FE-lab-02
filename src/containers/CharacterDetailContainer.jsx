import React from 'react';
import Villager from '../components/villagers/Villager.jsx';
import { useVillager } from '../hooks/useVillager';

const CharacterDetailContainer = () => {
  const { loading, villager } = useVillager();

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
};

export default CharacterDetailContainer;



