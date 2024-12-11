import React, { useState } from 'react';
import { addRestaurant } from '../services/api';

function AddRestaurantPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRestaurant(name, description, location).then((data) => {
      if (data) {
        setNotification('맛집 추가 성공!');
        setName('');
        setDescription('');
        setLocation('');
        setTimeout(() => setNotification(''), 3000); // 3초 후 알림 메시지 제거
      } else {
        setNotification('맛집 추가 실패! 다시 시도해 주세요.');
      }
    }).catch((error) => {
      console.error('맛집 추가 중 오류 발생:', error);
      setNotification('맛집 추가 중 오류 발생!');
    });
  };

  return (
    <div>
      <h1>맛집 추가</h1>
      {notification && <div className="notification">{notification}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="맛집 이름"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="맛집 설명"
        ></textarea>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="위치"
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
}

export default AddRestaurantPage;
