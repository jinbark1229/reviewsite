const db = require('../models/restaurantModel');

exports.getAllRestaurants = (req, res) => {
  db.query('SELECT * FROM restaurants', (err, rows) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(200).json(rows);
    }
  });
};

exports.createRestaurant = (req, res) => {
  const { name, description, location } = req.body;
  db.query('INSERT INTO restaurants (name, description, location) VALUES (?, ?, ?)', [name, description, location], (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else {
      res.status(201).json({ id: result.insertId, name, description, location });
    }
  });
};

exports.getRestaurantById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM restaurants WHERE id = ?', [id], (err, rows) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else if (rows.length === 0) {
      res.status(404).json({ message: 'Restaurant not found' });
    } else {
      res.status(200).json(rows[0]);
    }
  });
};

exports.updateRestaurant = (req, res) => {
  const { id } = req.params;
  const { name, description, location } = req.body;
  db.query('UPDATE restaurants SET name = ?, description = ?, location = ? WHERE id = ?', [name, description, location, id], (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Restaurant not found' });
    } else {
      res.status(200).json({ id, name, description, location });
    }
  });
};

exports.deleteRestaurant = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM restaurants WHERE id = ?', [id], (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Restaurant not found' });
    } else {
      res.status(200).json({ message: 'Restaurant deleted' });
    }
  });
};
