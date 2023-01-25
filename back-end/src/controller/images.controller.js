const path = require('path')

const getProductImgByImgName = (req, res, next ) => {
  const { imgName } = req.params
  const options = {
    root: path.join(
      __dirname,
      '../images/public',
      )
  }
  const fileName = imgName
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err);
  } else {
      console.log('Sent:', fileName);
      next();
  }
  });
}

module.exports = {
  getProductImgByImgName
}
