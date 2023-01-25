const express = require('express');
const { adminController } = require('../controller');

const router = express.Router();

router.post('/', adminController.registerNewUser);

module.exports = router;
