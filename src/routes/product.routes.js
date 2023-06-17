// All of our routers, and functionabilities that we are going to perform
// add user, delete user, names, etc...

const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');

// function to enable user login


// get all comments from comment table
router.get('/record/:id', productController.getRecord);

// create new comment
router.post('/add-record', productController.addRecord);


module.exports = router;