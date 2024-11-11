const express = require('express');
const mysql = require('mysql2');
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

// Sample endpoint to get data from the database
app.get('/api/books', (req, res) => {
    db.query('SELECT * FROM books', (err, results) => {
        if (err) {
            res.status(500).send('Error querying the database');
            return;
        }
        res.json(results);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
