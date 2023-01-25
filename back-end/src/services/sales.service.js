const { Sale, SaleProduct } = require('../database/models');

const getAll = async (sellerId) => {
  const allSales = await Sale.findAll({ where: { sellerId } });
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

const createSale = async (saleData) => {
  const { 
    userId, sellerId = 1, totalPrice, deliveryAddress,
    deliveryNumber, status = 'Preparando', products,
  } = saleData;

  const sale = await (await Sale.create(
    { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status },
  )).reload();
  // referencia reload(): https://github.com/sequelize/sequelize/issues/9151

  const saleId = sale.id;
  const createSalesProducts = products.map(async (product) => {
    await SaleProduct.create({
      saleId,
      productId: product.id,
      quantity: product.quantity,
    });
  });

  await Promise.all(createSalesProducts);

  if (sale) return { type: null, message: sale };
  return { type: 500, message: 'Internal Error' };
};

module.exports = {
  getAll,
  getOne,
  updateStatus,
  createSale,
};
