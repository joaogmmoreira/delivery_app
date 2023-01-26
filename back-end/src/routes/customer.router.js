const express = require('express');
const { customerController } = require('../controller');

const router = express.Router();

router.get('/orders/:id', customerController.getAllCustomerOrders);

module.exports = router;
