const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');  // Importing CORS

const app = express();
app.use(cors());  // Enabling CORS for all routes
app.use(express.json());

// Configure database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'RTGH6S!',
  database: 'website_management',
});

// Endpoint to handle login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are provided
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error' });
    }
    
    // Check if user exists
    if (results.length > 0) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
});

// Start the server on port 5000
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
