import React from 'react';
import PropTypes from 'prop-types';
import Villager from './Villager.jsx';

const VillagerList = ({ villagers }) => (
  <ul aria-label="villagers">
    {villagers.map((villager) => {
      <li>
        <Villager
          key={villager.id}
          name={villager.name}
          image={villager.image}
          quote={villager.quote}
          style={villager.style}
          coffee={villager.coffee}
        />
      </li>;
    })}
  </ul>
);

VillagerList.propTypes = {
  villagers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      style: PropTypes.string.isRequired,
      coffee: PropTypes.shape({
        roast: PropTypes.string.isRequired,
        milk: PropTypes.string.isRequired,
        sugar:PropTypes.string.isRequired
      })
    })
  ).isRequired
};

export default VillagerList;
