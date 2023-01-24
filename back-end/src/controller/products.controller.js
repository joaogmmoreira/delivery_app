const { productsService } = require('../services');

const getAll = async (_req, res) => {
  const { type, message } = await productsService.getAll();

  if (!type) {
    return res.status(200).json({ message });
  }

  return res.status(type).json({ message: 'tá zuado' });
};

module.exports = {
  getAll,
};
