import React from 'react';
import { Link } from 'react-router-dom';

function RestaurantList({ restaurants }) {
  return (
    <ul>
      {restaurants.map(restaurant => (
        <li key={restaurant.id}>
          <h2>{restaurant.name}</h2>
          <p>{restaurant.description}</p>
          <p>{restaurant.location}</p>
          <Link to={`/restaurants/${restaurant.id}`}>View Details</Link>
        </li>
      ))}
    </ul>
  );
}

export default RestaurantList;
