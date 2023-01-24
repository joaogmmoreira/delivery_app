const express = require('express');
const { loginController } = require('../controller');

const router = express.Router();

router.post('/', loginController.validateLogin);
router.post('/register', loginController.registerUser);

module.exports = router;
