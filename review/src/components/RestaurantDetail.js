import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';

function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetch(`/api/restaurants/${id}`)
      .then(response => response.json())
      .then(data => setRestaurant(data));
  }, [id]);

  if (!restaurant) {
    return <div>로딩 중...</div>;
  }

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      <p>{restaurant.location}</p>
      {/* 추가 정보 및 리뷰 리스트 */}
      <ReviewForm restaurantId={id} />
    </div>
  );
}

export default RestaurantDetail;
