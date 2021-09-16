import React, { useEffect, useState } from 'react';
import { getVillagerByName } from '../services/animalCrossingApi.jsx';
import Villager from '../components/villagers/Villager.jsx';

const CharacterDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [villager, setVillager] = useState([]);

  useEffect(() => {
    getVillagerByName()
      .then((villager) => setVillager(villager))
      .finally(() => setLoading(false));
  }, []);

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



