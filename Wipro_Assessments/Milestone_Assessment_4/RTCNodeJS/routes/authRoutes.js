const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// checking if the functions are correctly imported
console.log(authController.login);    
console.log(authController.register);


router.post('/register', authController.register);

router.post('/login', authController.login);

module.exports = router;
