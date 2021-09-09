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

export const getVillagerById = async (id) => {
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


