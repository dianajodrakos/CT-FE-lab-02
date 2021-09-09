import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({ id, name, image, quote, style, coffee }) => (
  <div className={style}>
    <img src={image} alt={name}  height="200px" />
    <h2>{name}</h2>
    <p>&quot;{quote}&quot;</p>
    <p>
      Coffee: {`
      ${coffee.roast} with 
      ${coffee.milk.toLowerCase()} and 
      ${coffee.sugar.toLowerCase()}.
      `}
    </p>
  </div>
);

export default Villager;

Villager.propTypes = {
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
};
