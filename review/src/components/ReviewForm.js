import React, { useState } from 'react';

function ReviewForm({ restaurantId }) {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/restaurants/${restaurantId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ review }),
    }).then(response => response.json())
      .then(data => {
        setReview('');
        // 성공적으로 리뷰가 추가된 후 처리
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="리뷰를 입력하세요"
      />
      <button type="submit">리뷰 작성</button>
    </form>
  );
}

export default ReviewForm;
