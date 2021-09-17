import { useEffect, useState } from 'react';
import { getVillagers } from '../services/animalCrossingApi';


export const useVillagers = (currentPage) => {
  const [loading, setLoading] = useState(true);
  const [villagers, setVillagers] = useState([]);
  
  useEffect(() => {
    getVillagers(currentPage)
      .then((villagers) => setVillagers(villagers))
      .catch(() => setVillagers([]))
      .finally(() => setLoading(false));
  }, [currentPage]);

  return { loading, villagers };
};
