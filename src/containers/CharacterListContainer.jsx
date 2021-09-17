import React from 'react';
import { useVillagers } from '../hooks/useVillagers.js';
import VillagerList from '../components/villagers/VillagerList.jsx';
import Loading from '../components/loading/Loading.jsx';

const CharacterListContainer = () => {
  const { loading, villagers } = useVillagers();

  if(loading)
    return <Loading />;
    
  return <VillagerList villagers={villagers} />;
};

export default CharacterListContainer;
