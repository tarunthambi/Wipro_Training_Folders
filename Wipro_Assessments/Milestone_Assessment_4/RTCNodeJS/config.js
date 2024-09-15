require('dotenv').config();

const config = {
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/chatapp',

    jwtSecret: process.env.JWT_SECRET || 'mySuperSecretKey',

    port: process.env.PORT || 5000,

};

module.exports = config;
