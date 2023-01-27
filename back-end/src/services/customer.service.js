const { Sale } = require('../database/models');

const getAllCustomerOrders = async (id) => {
  const allOrders = await Sale.findAll({
    where: {
      userId: id,
    },
  });

  return { type: null, message: allOrders };
};

module.exports = {
  getAllCustomerOrders,
};
