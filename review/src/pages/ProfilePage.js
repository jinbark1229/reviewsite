import React, { useState, useEffect } from 'react';
import UserProfile from '../components/UserProfile';
import { getUserProfile } from '../services/api';

function ProfilePage() {
  const [user, setUser] = useState(null);
  const email = localStorage.getItem('userEmail'); // 저장된 이메일 불러오기

  useEffect(() => {
    if (email) {
      getUserProfile(email).then(data => {
        if (data) {
          setUser(data);
        } else {
          console.error('사용자 프로필을 불러오는데 실패했습니다.');
        }
      }).catch(error => {
        console.error('프로필 정보를 불러오는 중 오류 발생:', error);
      });
    }
  }, [email]);

  return (
    <div>
      <h1>사용자 프로필</h1>
      {user ? <UserProfile user={user} /> : <p>Loading...</p>}
    </div>
  );
}

export default ProfilePage;
