import React, { useState, useEffect } from 'react';
import RestaurantList from '../components/RestaurantList';

function HomePage() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('/api/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data));
  }, []);

  return (
    <div>
      <h1>맛집 리스트</h1>
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}

export default HomePage;
