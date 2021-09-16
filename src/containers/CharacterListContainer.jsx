import React from 'react';
import { useVillagers } from '../hooks/useVillagers.js';
import VillagerList from '../components/villagers/VillagerList.jsx';


const CharacterListContainer = () => {
  const { loading, villagers } = useVillagers();

  if(loading)
    return <h1>loading...</h1>;
    
  return <VillagerList villagers={villagers} />;
};

export default CharacterListContainer;
