import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">홈</Link>
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
        <Link to="/search">검색</Link>
        <Link to="/add-restaurant">맛집 추가</Link>
        <Link to="/profile">프로필</Link>
      </nav>
    </header>
  );
}

export default Header;
