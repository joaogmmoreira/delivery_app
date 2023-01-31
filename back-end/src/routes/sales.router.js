const express = require('express');
const { salesController } = require('../controller');
const { validateCustomer } = require('../middleware/validateCustomer');

const router = express.Router();

router.get('/seller/:sellerId', salesController.getAllBySeller);
router.get('/:id', salesController.getOne);
router.get('/products/:id', salesController.getSaleProducts);
router.patch('/:id', salesController.updateStatus);
router.post('/', validateCustomer, salesController.createSale);

module.exports = router;
