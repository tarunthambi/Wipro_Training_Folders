const express = require('express');
const mysql = require('mysql2');
const app = express();
const path = require('path');
const cors=require('cors');

const port = 5000;

//Enable CORS for all routes and origins
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // username
    password: 'Carry@123', // password
    database: 'demo'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

// Route to get all items
app.get('/api/items', (req, res) => {
    connection.query('SELECT * FROM items', (error, results) => {
        if (error) return res.status(500).send(error);
        res.json(results);
    });
});

// Route to get an item by id
app.get('/api/items/:_id', (req, res) => {
    connection.query('SELECT * FROM items WHERE _id = ?', [req.params._id], (error, results) => {
        if (error) return res.status(500).send(error);
        if (results.length === 0) return res.status(404).send('Item not found');
        res.json(results[0]);
    });
});

// Route to create a new item
app.post('/api/items', (req, res) => {
    const { itemId } = req.body;
    const { itemName } = req.body;
    const { price } = req.body;
    connection.query('INSERT INTO items (itemId,itemName,price) VALUES (?,?,?)', [itemId,itemName,price], (error, results) => {
        if (error) return res.status(500).send(error);
        res.status(201).json({ _id: results.insertId, itemId,itemName,price });
    });
});

// Route to update an item
app.put('/api/items/:_id', (req, res) => {
    const { itemId } = req.body;
    const { itemName } = req.body;
    const { price } = req.body;
    connection.query('UPDATE items SET itemId=?,itemName=?,price=? WHERE _id = ?', [itemId,itemName,price, req.params._id], (error, results) => {
        if (error) return res.status(500).send(error);
        if (results.affectedRows === 0) return res.status(404).send('Item not found');
        res.json({ _id: parseInt(req.params._id), itemId,itemName,price });
    });
});

// Route to delete an item
app.delete('/api/items/:_id', (req, res) => {
    connection.query('DELETE FROM items WHERE _id = ?', [req.params._id], (error, results) => {
        if (error) return res.status(500).send(error);
        if (results.affectedRows === 0) return res.status(404).send('Item not found');
        res.status(204).send();
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});