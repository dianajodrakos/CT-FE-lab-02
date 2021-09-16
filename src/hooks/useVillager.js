import { useEffect, useState } from 'react';
import { getVillagerByName } from '../services/animalCrossingApi.jsx';

export const useVillager = () => {
  const [loading, setLoading] = useState(true);
  const [villager, setVillager] = useState([]);

  useEffect(() => {
    getVillagerByName()
      .then((villager) => setVillager(villager))
      .finally(() => setLoading(false));
  }, []);

  return { loading, villager };
}