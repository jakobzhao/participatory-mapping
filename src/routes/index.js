// Index.js allows us to set up our root API function and router.

const express = require('express');
// const path = require('path');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'connection established!',
    version: '1.0.0',
  });
});

// router.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + '../../index.html'));
//   res.render("about", { title: "Hey", message: "Hello there!" });
// });




module.exports = router;