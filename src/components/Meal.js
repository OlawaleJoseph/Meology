import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Meal({
  image, name, id, info, area,
}) {
  return (
    <article className="meal">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="meal-footer">
        <h3>{name}</h3>
        <h4>{area}</h4>
        <p>{info}</p>
        <Link to={`/meal/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
}

Meal.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
};
