// Import the required module
const router = require('express-promise-router')();

// Import the productController module
const productController = require('../controllers/product.controller');

// Define routes for the functionalities
router.get('/get-record', productController.getRecord);
router.post('/add-record', productController.addRecord);

// Export the router module
module.exports = router;
