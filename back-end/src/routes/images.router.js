const express = require('express');
const imagesController = require('../controller/images.controller')

const router = express.Router();

router.get('/:imgName', imagesController.getProductImgByImgName)

module.exports = router
