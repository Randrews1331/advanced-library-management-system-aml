const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const port = 5000;

// Enable CORS for cross-origin requests
app.use(cors());
app.use(express.json());

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'RTGH6S!', // Your MySQL password
  database: 'website_management',
  port: 3307,
});

// Test the connection
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  console.log('Received login request for username:', username);  // Debug log

  // Query the database for the user by username
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      console.error('Database error:', err);  // Log any database errors
      return res.status(500).json({ error: 'Error querying the database' });
    }

    if (results.length === 0) {
      console.log('No user found with that username:', username);  // Log if no user found
      return res.status(400).json({ error: 'Username not found' });
    }

    const user = results[0];
    console.log('User found:', user.username);

    // Compare the entered password with the hashed password in the database
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error('Error comparing passwords:', err);  // Log password comparison errors
        return res.status(500).json({ error: 'Error comparing passwords' });
      }

      if (!isMatch) {
        console.log('Password mismatch for user:', username);  // Log if passwords don't match
        return res.status(400).json({ error: 'Incorrect password' });
      }

      // Generate JWT token if password matches
      const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET || 'your-secret-key',  // JWT secret (use environment variable in production)
        { expiresIn: '1h' }
      );

      console.log('Login successful for user:', username);  // Log successful login
      return res.json({ message: 'Login successful', token });
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
