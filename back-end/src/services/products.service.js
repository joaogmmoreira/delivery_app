const { img } = require('../../../__tests__/selectors/customer/products');
const { Product } = require('../database/models');

const getAll = async () => {
  const allProducts = await Product.findAll();

  return { type: null, message: allProducts };
};

module.exports = {
  getAll,
};
