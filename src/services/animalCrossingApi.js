import { findVillager } from '../utils/findVillager';

const url = 'https://ac-vill.herokuapp.com/villagers/';

export const getVillagers = async () => {
  const res = await fetch(url);
  const json = await res.json();
  
  return json.map((villager) => ({
    id: villager._id,
    name: villager.name,
    image: villager.image,
    quote: villager.quote,
    style: villager.style,
    coffee: villager.coffee
  }));
};

export const getVillagerByName = async (name) => {
  const id = await findVillager(name);

  const res = await fetch(`${url}${id}`);
  const json = await res.json();

  return {
    id: json._id,
    name: json.name,
    image: json.image,
    quote: json.quote,
    style: json.style,
    coffee: json.coffee
  }; 
};


