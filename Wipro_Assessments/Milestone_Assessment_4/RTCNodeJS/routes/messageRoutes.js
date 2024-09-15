// const express = require('express');
// const router = express.Router();
// const messageController = require('../controllers/messageController');

// router.get('/', messageController.getMessages);

// module.exports = router;
const express = require('express');
const router = express.Router();
const Message = require('../models/message');

// POST route for joining a room
router.post('/join', (req, res) => {
    const { username, room } = req.body;
    if (!username || !room) {
        return res.status(400).json({ message: 'Username and room are required' });
    }
    res.status(200).json({ message: `User ${username} joined room ${room}` });
});

// POST route for saving a message
router.post('/', async (req, res) => {
    const { username, room, message } = req.body;

    try {
        const newMessage = await Message.create({ username, room, message });
        res.status(201).json(newMessage);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Failed to save message' });
    }
});

// GET route for retrieving messages in a specific room
router.get('/:room', async (req, res) => {
    try {
        const messages = await Message.find({ room: req.params.room }).sort({ timestamp: 1 });
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch messages' });
    }
});

module.exports = router;
