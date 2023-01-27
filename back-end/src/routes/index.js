const express = require('express');
const loginRouter = require('./login.router');
const productsRouter = require('./products.router');
const salesRouter = require('./sales.router');
const imagesRouter = require('./images.router');
const adminRouter = require('./adimin.router');
const customerRouter = require('./customer.router');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/products', productsRouter);
router.use('/sales', salesRouter);
router.use('/admin', adminRouter);
router.use('/images', imagesRouter);
router.use('/customer', customerRouter);

module.exports = router;
