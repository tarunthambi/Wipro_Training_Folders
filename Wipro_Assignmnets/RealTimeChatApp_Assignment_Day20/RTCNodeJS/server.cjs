const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const path = require('path');
const Message = require('./models/mongoMessage.cjs');


const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, 'public')));

// connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/realTimeChat_App', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// listening for incoming connections
io.on('connection', (socket) => {
    console.log('New user connected');

    // handles user in joining a room
    socket.on('joinRoom', async ({ username, room }) => {
        socket.join(room);
        console.log(`${username} joined room: ${room}`);

        // sending chat history to the newly joined user
        const chatHistory = await Message.find({ room }).sort({ timestamp: 1 });
        chatHistory.forEach((message) => {
            socket.emit('message', { user: message.user, text: message.text });
        });

        // broadcasting to the room that a new user has joined
        socket.to(room).emit('message', { user: 'admin', text: `${username} has joined the chat` });
    });


    socket.on('chatMessage', (message) => {
        const { room, user, text } = message;

        // saving the message to MongoDB
        const newMessage = new Message({ user, text, room });
        newMessage.save().then(() => {
            // emiting the message to all clients in the room after saving
            io.to(room).emit('message', { user, text });
        }).catch(err => console.error('Error saving message:', err));
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});

