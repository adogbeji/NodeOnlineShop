const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

// const rootDir = require('../util/path');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders');

router.get('/checkout', shopController.getCheckout);

module.exports = router;