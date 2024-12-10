import React, { useState } from 'react';
import { signup } from '../services/api';
import '../components/Notification.css';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password).then((data) => {
      if (data) {
        setNotification('회원가입 성공!');
        setTimeout(() => setNotification(''), 3000); // 3초 후 알림 메시지 제거
      } else {
        setNotification('회원가입 실패! 다시 시도해 주세요.');
      }
    }).catch((error) => {
      console.error('회원가입 중 오류 발생:', error);
      setNotification('회원가입 중 오류 발생!');
    });
  };

  return (
    <div>
      <h1>회원가입</h1>
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
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default SignupPage;
