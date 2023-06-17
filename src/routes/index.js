// Index.js allows us to set up our root API function and router.

const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'connection established!',
    version: '1.0.0',
  });
});

module.exports = router;