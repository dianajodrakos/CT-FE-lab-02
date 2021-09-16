import { getVillagers } from '../services/animalCrossingApi';

export const findVillager = async (name) => {
  const villagerArray = await getVillagers();
  const villager = villagerArray.find(villager => villager.name === name);
  return villager.id;
};
