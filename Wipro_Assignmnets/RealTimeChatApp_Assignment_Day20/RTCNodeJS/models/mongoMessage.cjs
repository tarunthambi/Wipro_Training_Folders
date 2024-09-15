// models/mongoMessage.cjs

const mongoose = require('mongoose');

// Create a message schema
const messageSchema = new mongoose.Schema({
    user: { type: String, required: true },
    text: { type: String, required: true },
    room: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

// Create a Message model
const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
