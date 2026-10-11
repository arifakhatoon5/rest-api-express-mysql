const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.json());

const db = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'testdb'
});

db.connect((err) => {
if (err) {
console.log('Database connection failed');
return;
}
console.log('MySQL connected');
});

app.get('/', (req, res) => {
res.send('REST API Server is running');
});

app.get('/users', (req, res) => {
db.query('SELECT * FROM users', (err, results) => {
if (err) return res.status(500).json(err);
res.json(results);
});
});

app.post('/users', (req, res) => {
const { name, email } = req.body;

db.query(
'INSERT INTO users (name, email) VALUES (?, ?)',
[name, email],
(err, result) => {
if (err) return res.status(500).json(err);
res.status(201).json({
message: 'User added successfully',
id: result.insertId
});
}
);
});

app.listen(3000, () => {
console.log('Server running on port 3000');
});