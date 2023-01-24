const express = require('express');
const loginRouter = require('./login.router');
const productsRouter = require('./products.router');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/products', productsRouter);

module.exports = router;
