import React from 'react';

function UserProfile({ user }) {
  return (
    <div>
      <h2>이메일: {user.email}</h2>
      <p>사용자 ID: {user.id}</p>
      <p>이름: {user.name}</p>
      <p>가입 날짜: {user.join_date}</p>
      <img src={user.profile_pic_url} alt="프로필 사진" />
      {/* 다른 사용자 정보 표시 */}
    </div>
  );
}

export default UserProfile;
