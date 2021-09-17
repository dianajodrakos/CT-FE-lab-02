import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Villager from './Villager';

const VillagerList = ({ villagers }) => (
  <>
    <nav>
      <button aria-label='prev-page'>&lt;</button>
      <p>page</p>
      <button aria-label='next-page'>&gt;</button>
    </nav>
    <ul aria-label="villagers">
      {villagers.map((villager) => {
        return (
          <li key={villager.id}>
            <Link to={`/${villager.name}`}>
              <Villager
                id={villager.id}
                name={villager.name}
                image={villager.image}
                quote={villager.quote}
                style={villager.style}
                coffee={villager.coffee}
              />
            </Link>
          </li>);
      })}
    </ul>
  </>
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
