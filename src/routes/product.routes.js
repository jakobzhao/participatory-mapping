// All of our routers, and functionalities that we are going to perform
// add user, delete user, names, etc...

const router = require('express-promise-router')();
const productController = require('../controllers/product.controller');


// get all record from tblRecord table
router.get('/record/:id', productController.getRecord);

// create new record
router.post('/addRecord', productController.addRecord);


module.exports = router;