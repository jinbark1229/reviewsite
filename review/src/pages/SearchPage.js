import React, { useState } from 'react';
import RestaurantList from '../components/RestaurantList';

function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Search logic
  };

  return (
    <div>
      <h1>맛집 검색</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="이름 또는 지역을 입력해주세요"
        />
        <button type="submit">검색</button>
      </form>
      <RestaurantList restaurants={results} />
    </div>
  );
}

export default SearchPage;
