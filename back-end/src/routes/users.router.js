const express = require('express');
const usersController = require('../controller/users.controller');

const router = express.Router();

router.get('/:id', usersController.getAllUsers);

module.exports = router;
