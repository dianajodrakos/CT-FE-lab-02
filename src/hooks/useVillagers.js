import { useEffect, useState } from 'react';
import { getVillagers } from '../services/animalCrossingApi';


export const useVillagers = () => {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers] = useState([]);
  
  useEffect(() => {
    getVillagers()
      .then((villagers) => setVillagers(villagers))
      .catch(() => setVillagers([]))
      .finally(() => setLoading(false));
  }, []);

  return { loading, villagers };
};
