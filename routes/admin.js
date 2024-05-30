const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product => GET
router.get('/admin/add-product', productsController.getAddProduct);

// /admin/add-product => POST
router.post('/admin/add-product', productsController.postAddProduct);

module.exports = router;
