import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import RestaurantDetail from './components/RestaurantDetail';
import AddRestaurantPage from './pages/AddRestaurantPage'; // 추가된 라우트
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/restaurants/:id" element={<RestaurantDetail />} />
          <Route path="/add-restaurant" element={<AddRestaurantPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
