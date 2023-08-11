const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

// In-memory database to store registered users
const users = [];

app.post('/users/register', (req, res) => {
  const { username, email, password } = req.body;

  // Check if the username or email is already registered
  if (users.some(user => user.username === username || user.email === email)) {
    return res.status(400).json({ success: false, message: 'Username or email already in use' });
  }

  // Simulate storing user data in the database
  const newUser = { username, email, password };
  users.push(newUser);

  res.json({ success: true, message: 'Registration successful' });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
