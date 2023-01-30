const Sinon = require("sinon");
const { expect } = require("chai");

const { Sale, SaleProduct } = require('../../../database/models');
const salesService = require('../../../services/sales.service');

const { salesModelOutput, oneSaleModelOutput, productsFromSale } = require("./mocks/salesMocks");

describe('Sale Service Tests', () => {

  afterEach(() => {
    Sinon.restore();
  });

  describe('Get sales', () => {
    it('Get All by seller - success', async () => {
      Sinon.stub(Sale, 'findAll').resolves(salesModelOutput);

      const result = await salesService.getAll(1);

      expect(result).to.be.deep.equal({type: null, message: salesModelOutput});
    });

    it('Get One sale by id - success', async () => {
      Sinon.stub(Sale, 'findOne').resolves(oneSaleModelOutput);

      const result = await salesService.getOne(1);

      expect(result).to.be.deep.equal({type: null, message: oneSaleModelOutput});
    });

    it('Get One sale by id - fail', async () => {
      Sinon.stub(Sale, 'findOne').resolves(null);

      const result = await salesService.getOne(1);

      expect(result).to.be.deep.equal({ type: 404, message: 'Sale not found' });
    });
  });

  describe('Get products', () => {
    it('Get all products from a specific sale - success', async () => {
      Sinon.stub(SaleProduct, 'findAll').resolves(productsFromSale);

      const result = await salesService.getSaleProducts(1);

      expect(result).to.be.deep.equal({type: null, message: productsFromSale});
    });

    it('Get all products from a specific sale - fail', async () => {
      Sinon.stub(SaleProduct, 'findAll').resolves(null);

      const result = await salesService.getSaleProducts(1);

      expect(result).to.be.deep.equal({ type: 404, message: 'No sales registered' });
    });
  });
});