const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);


// const contactController = require('../controllers/contact')
router.get('/success',productsController.getSuccess)

router.get('/contactus',productsController.getContactus)

module.exports = router;
