const express = require('express');
const { adminController } = require('../controller');
const { validateAdmin } = require('../middleware/validateAdmin');

const router = express.Router();

router.post('/', validateAdmin, adminController.registerNewUser);

module.exports = router;
