import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/search">검색</Link></li>
          <li><Link to="/login">로그인</Link></li>
          <li><Link to="/signup">회원가입</Link></li>
          <li><Link to="/profile">프로필</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
