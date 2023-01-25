const express = require('express');
const { salesController } = require('../controller');

const router = express.Router();

router.get('/', salesController.getAll);

module.exports = router;
