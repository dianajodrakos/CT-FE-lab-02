import React from 'react';
import Villager from '../components/villagers/Villager.jsx';
import { useVillager } from '../hooks/useVillager';
import Loading from '../components/loading/Loading.jsx';

const CharacterDetailContainer = () => {
  const { loading, villager } = useVillager();

  if(loading)
    return <Loading />;
    
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



