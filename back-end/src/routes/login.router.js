const express = require('express');
const controller = require('../controller');

const router = express.Router();

router.get('/', controller.login.validateLogin);

module.exports = router;
