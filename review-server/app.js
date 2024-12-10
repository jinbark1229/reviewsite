const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const restaurantRoutes = require('./routes/restaurantRoutes');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '10Dnwntjd!',
  database: 'mysql1214',
  port: 3306
});

// 회원가입 엔드포인트
app.post('/api/auth/signup', async (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: '이메일과 비밀번호를 입력해주세요.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: '이미 존재하는 이메일입니다.' });
      }
      return res.status(500).json({ message: '회원가입 실패', error: err });
    }
    res.status(201).json({ message: '회원가입 성공', userId: result.insertId });
  });
});

// 로그인 엔드포인트
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: '이메일과 비밀번호를 입력해주세요.' });
  }

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, rows) => {
    if (err) {
      return res.status(500).json({ message: '로그인 실패', error: err });
    }
    if (rows.length === 0) {
      return res.status(401).json({ message: '이메일 또는 비밀번호가 잘못되었습니다.' });
    }

    const user = rows[0];
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: '이메일 또는 비밀번호가 잘못되었습니다.' });
    }

    res.status(200).json({ message: '로그인 성공', user });
  });
});

// 프로필 엔드포인트
app.get('/api/auth/profile', (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ message: '이메일이 필요합니다.' });
  }

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: '프로필 정보를 가져오는데 실패했습니다.', error: err });
    }
    if (rows.length === 0) {
      return res.status(404).json({ message: '사용자를 찾을 수 없습니다.' });
    }
    res.status(200).json(rows[0]);
  });
});

app.use('/api/restaurants', restaurantRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
