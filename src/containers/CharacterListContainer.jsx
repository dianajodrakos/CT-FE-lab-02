import React from 'react';
import Loading from '../components/loading/Loading.jsx';
import VillagerList from '../components/villagers/VillagerList.jsx';
import { useVillagers } from '../hooks/useVillagers.js';

const CharacterListContainer = () => {
  const { loading, villagers } = useVillagers();

  if(loading)
    return <Loading />;
    
  return <VillagerList villagers={villagers} />;
};

export default CharacterListContainer;
