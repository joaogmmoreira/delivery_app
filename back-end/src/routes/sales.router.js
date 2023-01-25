const express = require('express');
const { salesController } = require('../controller');

const router = express.Router();

router.get('/:sellerId', salesController.getAllBySeller);
router.get('/:id', salesController.getOne);
router.patch('/:id', salesController.updateStatus);
router.post('/', salesController.createSale);

module.exports = router;
