const API_BASE_URL = 'http://localhost:5000/api';

// 회원가입 요청
export const signup = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('회원가입 요청에 실패했습니다.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('회원가입 중 오류 발생:', error);
    return null;
  }
};

// 로그인 요청
export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('로그인 요청에 실패했습니다.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('로그인 중 오류 발생:', error);
    return null;
  }
};

// 사용자 프로필 가져오기 요청
export const getUserProfile = async (email) => {
  try {
    const response = await fetch(`http://localhost:5000/api/auth/profile?email=${email}`);
    if (!response.ok) {
      throw new Error('프로필 정보를 가져오는데 실패했습니다.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('프로필 정보를 가져오는 중 오류 발생:', error);
    return null;
  }
};


// 맛집 목록 가져오기 요청
export const getRestaurants = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurants`);
    if (!response.ok) {
      throw new Error('맛집 목록을 가져오는데 실패했습니다.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('맛집 목록 가져오는 중 오류 발생:', error);
    return null;
  }
};

// 맛집 상세 정보 가져오기 요청
export const getRestaurantById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurants/${id}`);
    if (!response.ok) {
      throw new Error('맛집 정보를 가져오는데 실패했습니다.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('맛집 정보 가져오는 중 오류 발생:', error);
    return null;
  }
};

// 맛집 추가 요청
export const addRestaurant = async (name, description, location) => {
  try {
    const response = await fetch(`${API_BASE_URL}/restaurants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description, location }),
    });

    if (!response.ok) {
      throw new Error('맛집 추가 요청에 실패했습니다.');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('맛집 추가 중 오류 발생:', error);
    return null;
  }
};
