const express = require('express');
const loginRouter = require('./login.router');
const productsRouter = require('./products.router');
const salesRouter = require('./sales.router');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/products', productsRouter);
router.use('/sales', salesRouter);

module.exports = router;
