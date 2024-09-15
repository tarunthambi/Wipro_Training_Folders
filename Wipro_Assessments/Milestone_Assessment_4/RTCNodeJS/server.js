// // server.js
// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');
// const messageRoutes = require('./routes/messageRoutes');
// const { authenticateToken } = require('./middleware/authMiddleware');
// const Message = require('./models/Message');

// const config = require('./config');
// require('dotenv').config();

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// app.use(cors());
// app.use(express.json());
// app.use('/api/auth', authRoutes);
// app.use('/api/messages', authenticateToken, messageRoutes);

// // MongoDB connection
// mongoose.connect(config.mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log('Error connecting to MongoDB:', err));

// io.on('connection', (socket) => {
//     console.log('New client connected');

//     // User joins a room
//     socket.on('joinRoom', ({ username, room }) => {
//         socket.join(room);
//         console.log(`${username} joined room ${room}`);
//         socket.to(room).emit('receiveMessage', { username: 'System', message: `${username} has joined the room.` });
//     });

//     // Handle message sending
//     socket.on('sendMessage', async (message) => {
//         console.log('Received message to save:', message); // Added logging here

//         // Check if required fields exist
//         if (!message.username || !message.message || !message.room) {
//             console.error('Message is missing fields:', message);
//             return;
//         }

//         try {
//             // Save the message to the MongoDB database
//             const newMessage = await Message.create({
//                 username: message.username,
//                 message: message.message,
//                 room: message.room,
//                 timestamp: new Date(), // Explicitly setting timestamp
//             });

//             console.log('Message saved:', newMessage); // Success log
//             // Emit message to everyone in the room
//             io.to(message.room).emit('receiveMessage', message);

//         } catch (err) {
//             console.error('Error saving message to DB:', err);
//         }
//     });

//     socket.on('disconnect', () => {
//         console.log('Client disconnected');
//     });
// });

// // Starting the server
// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes'); // Import message routes
const { authenticateToken } = require('./middleware/authMiddleware');
const Message = require('./models/message'); // Import the Message model
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/messages', authenticateToken, messageRoutes); // Protect message routes with token authentication

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Error connecting to MongoDB:', err));

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('joinRoom', ({ username, room }) => {
        socket.join(room);
        console.log(`${username} joined room ${room}`);
        socket.to(room).emit('receiveMessage', { username: 'System', message: `${username} has joined the room.` });
    });

    socket.on('sendMessage', async (message) => {
        console.log('Received message:', message);
        try {
            await Message.create(message); // Store the message in MongoDB
            io.to(message.room).emit('receiveMessage', message); // Broadcast the message to the room
        } catch (err) {
            console.error('Error saving message:', err);
        }
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
