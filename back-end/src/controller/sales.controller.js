const { salesService } = require('../services');

const getAll = async (_req, res) => {
  const { type, message } = await salesService.getAll();

  if (!type) {
    return res.status(200).json({ message });
  }

  return res.status(type).json({ message: 'Internal error' });
};

module.exports = {
  getAll,
};
