import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVillagerByName } from '../services/animalCrossingApi';

export const useVillager = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [villager, setVillager] = useState(null);

  useEffect(() => {
    getVillagerByName(name)
      .then((villager) => setVillager(villager))
      .finally(() => setLoading(false));
  }, []);

  return { loading, villager };
};
