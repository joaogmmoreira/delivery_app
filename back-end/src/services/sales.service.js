const { Sale } = require('../database/models');

const getAll = async () => {
  const allSales = await Sale.findAll();
  if (allSales) return { type: null, message: allSales };
  return { type: 404, message: 'No sales registered' };
};

const getOne = async (id) => {
  const sale = await Sale.findOne({ where: { id } });
  if (sale) return { type: null, message: sale };
  return { type: 404, message: 'Sale not found' };
};

const updateStatus = async (id, status) => {
  const sale = await Sale.update({ status }, { where: { id } });
  if (sale) { 
    return { 
      type: null, message: `${sale} sale status updated successfully to: ${status}`,
    };
  }
  return { type: 404, message: 'Sale not found' };
};

module.exports = {
  getAll,
  getOne,
  updateStatus,
};
