const express = require('express');
const { calculatePriceController } = require('../controllers/pricingController');
const router = express.Router();

router.post('/calculate-price', calculatePriceController);

module.exports = router;
