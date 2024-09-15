const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const users = []; 

// Register 
const register = (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ username, password: hashedPassword });
  res.status(201).send({ message: 'User registered successfully' });
};

// Login
const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).send({ message: 'User not found' });

  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) return res.status(401).send({ token: null });

  const token = jwt.sign({ id: user.username }, process.env.JWT_SECRET, {
    expiresIn: 86400, // 24 hours
  });

  res.status(200).send({ token });
};

// Middleware for token verification
const verifyToken = (req, res, next) => {
  console.log(req.headers);

  const authHeader = req.headers['authorization'];
  console.log(authHeader);

  if (!authHeader) return res.status(403).send({ message: 'No token provided' });

  const token=authHeader.split(' ')[1]; //Extract the token part
  console.log(token);
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(500).send({ message: 'Failed to authenticate token' });
    req.userId = decoded.id;
    next();
  });
};

module.exports = { register, login, verifyToken };
