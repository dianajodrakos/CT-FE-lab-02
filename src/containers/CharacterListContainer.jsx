import React, { useEffect, useState } from 'react';
import { getVillagers } from '../services/animalCrossingApi.jsx';
import VillagerList from '../components/villagers/VillagerList.jsx';

const CharacterListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers] = useState([]);

  useEffect(() => {
    getVillagers()
      .then((villagers) => setVillagers(villagers))
      .finally(() => setLoading(false));
  }, []);

  if(loading)
    return <h1>loading...</h1>;
    
  return <VillagerList villagers={villagers} />;
};

export default CharacterListContainer;
