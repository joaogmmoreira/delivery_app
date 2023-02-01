const { customerService } = require('../services');

const getAllCustomerOrders = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await customerService.getAllCustomerOrders(id);

  if (!type) {
    return res.status(200).json({ message });
  }

  res.status(type).json({ message });
};

module.exports = {
  getAllCustomerOrders,
};
