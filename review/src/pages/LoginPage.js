import React, { useState } from 'react';
import { login } from '../services/api';
import '../components/Notification.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password).then((data) => {
      if (data) {
        setNotification('로그인 성공!');
        localStorage.setItem('userEmail', email); // 이메일 저장
        setTimeout(() => setNotification(''), 3000); // 3초 후 알림 메시지 제거
      } else {
        setNotification('로그인 실패! 다시 시도해 주세요.');
      }
    }).catch((error) => {
      console.error('로그인 중 오류 발생:', error);
      setNotification('로그인 중 오류 발생!');
    });
  };

  return (
    <div>
      <h1>로그인</h1>
      {notification && <div className="notification">{notification}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default LoginPage;
