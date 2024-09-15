const express = require('express');
const axios = require('axios');
const http = require('http');
const path=require('path');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

const API_BASE_URL = 'http://localhost:5270/api/Order';

// Endpoint to get all orders
app.get('/order', async (req, res) => {
    try {
        const response = await axios.get(API_BASE_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching orders');
    }
});

// Endpoint to get a specific order
app.get('/order/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.get(`${API_BASE_URL}/${id}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching order');
    }
});

// Endpoint to create a new order
app.post('/order', async (req, res) => {
    try {
        const response = await axios.post(API_BASE_URL, req.body);
        const order = response.data;
        io.emit('orderCreated', order); // Emit event for real-time updates
        res.status(201).json(order);
    } catch (error) {
        res.status(500).send('Error creating order');
    }
});

// Endpoint to update an order
app.put('/order/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await axios.put(`${API_BASE_URL}/${id}`, req.body);
        const order = response.data;
        io.emit('orderUpdated', order); // Emit event for real-time updates
        res.json(order);
    } catch (error) {
        res.status(500).send('Error updating order');
    }
});

// Endpoint to delete an order
app.delete('/order/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await axios.delete(`${API_BASE_URL}/${id}`);
        io.emit('orderDeleted', { id }); // Emit event for real-time updates
        res.status(204).send();
    } catch (error) {
        res.status(500).send('Error deleting order');
    }
});

// Real-time updates with Socket.io
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
