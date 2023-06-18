// Import the required module
const express = require('express');

// Create an Express router instance
const router = express.Router();

// Define a GET route for the '/api' endpoint
router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'connection established!',
    version: '1.0.0',
  });
});

// Export the router module
module.exports = router;
