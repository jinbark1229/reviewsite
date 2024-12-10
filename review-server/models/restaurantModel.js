const mysql = require('mysql2');
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '10Dnwntjd!',
  database: 'mysql1214',
  port: 3306
});

db.connect(err => {
  if (err) {
    console.error('DB 연결 실패:', err);
    return;
  }
  console.log('DB 연결 성공');
});

const createRestaurantTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS restaurants (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      description TEXT,
      location VARCHAR(255)
    );
  `;
  db.query(query, (err) => {
    if (err) {
      console.error('테이블 생성 실패:', err);
    } else {
      console.log('테이블 생성 성공');
    }
  });
};

createRestaurantTable();

module.exports = db;
