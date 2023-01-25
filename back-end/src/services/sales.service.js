const { Sale } = require('../database/models');

const getAll = async () => {
  const allSales = await Sale.findAll();

  return { type: null, message: allSales };
};

module.exports = {
  getAll,
};
