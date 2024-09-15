const express = require('express');
const dotenv = require('dotenv');
const { register, login, verifyToken } = require('./auth');

dotenv.config();
const app = express();

app.use(express.json());

//app.use(cors({origin: 'http://localhost:3000'}));

// app.use(
//     cors({origin: ['http://localhost:3000', 'http://127.0.0.1:3000']})
//   );

app.post('/register', register);
app.post('/login', login);

// Protected route
app.get('/profile', verifyToken, (req, res) => {
  res.status(200).send({ message: `Welcome ${req.userId}` });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT} as http://localhost:${process.env.PORT}`);
});
