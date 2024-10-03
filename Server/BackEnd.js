const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Use your MySQL username
  password: 'your_password', // Use your MySQL password
  database: 'your_database'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

// POST route for login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], async (err, result) => {
    if (err) return res.status(500).send('Server error');
    if (result.length === 0) return res.status(404).send('User not found');

    const user = result[0];

    // Compare password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send('Invalid credentials');

    res.status(200).send('Login successful');
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));
