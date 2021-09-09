export const getVillagers = () => {
  return fetch('https://ac-vill.herokuapp.com/villagers')
    .then((res) => res.json())
    .then((json) => {
      json.results.map((villager) => ({
        id: villager._id,
        name: villager.name,
        image: villager.image,
        quote: villager.quote,
        style: villager.style,
        coffee: villager.coffee
      }));
    });
};
