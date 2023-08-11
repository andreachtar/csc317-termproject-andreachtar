const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const db = require('./application/db'); 

// GET users listing (existing code)
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST registration (new code)
router.post('/register', async (req, res, next) => {
  try {
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Insert user into database (adapt to your DB schema)
    db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
             [req.body.username, req.body.email, hashedPassword], 
             function(error) {
      if (error) throw error;
      res.redirect('/login');
    });
  } catch (error) {
    next(error); // Forward error to your error handler
  }
});

// POST login (new code)
router.post('/login', (req, res, next) => {
  try {
    // Fetch user from the database and compare password
    db.query('SELECT * FROM users WHERE username = ?', [req.body.username], 
             async function(error, results) {
      if (error) throw error;

      if (results.length > 0) {
        const comparison = await bcrypt.compare(req.body.password, results[0].password);
        
        if (comparison) {
          // Create session and redirect to home or desired page
          res.redirect('/home');
        } else {
          res.send('Incorrect Password!');
        }
      } else {
        res.send('Username does not exist!');
      }
    });
  } catch (error) {
    next(error); // Forward error to your error handler
  }
});

module.exports = router;
