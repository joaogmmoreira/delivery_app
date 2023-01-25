const { salesService } = require('../services');

const getAllBySeller = async (req, res) => {
  const { sellerId } = req.params;
  const { type, message } = await salesService.getAll(sellerId);

  if (!type) {
    return res.status(200).json({ message });
  }

  return res.status(type).json({ message });
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getOne(id);

  if (!type) {
    return res.status(200).json({ message });
  }

  return res.status(type).json({ message });
};

const getSaleProducts = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getSaleProducts(id);

  if (!type) {
    return res.status(200).json({ message });
  }

  return res.status(type).json({ message });
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const { type, message } = await salesService.updateStatus(id, status);

  const validStatus = ['Pendente', 'Preparando', 'Em Trânsito', 'Entregue'];
  if (!validStatus.includes(status)) {
    res.status(400).json({ message: 'Invalid status request' });
  }

  if (!type) {
    return res.status(200).json({ message });
  }

  return res.status(type).json({ message });
};

const createSale = async (req, res) => {
  const saleData = req.body;
  const { type, message } = await salesService.createSale(saleData);

  if (!type) {
    return res.status(201).json({ message });
  }

  return res.status(type).json({ message });
};

module.exports = {
  getAllBySeller,
  getOne,
  updateStatus,
  createSale,
  getSaleProducts,
};
