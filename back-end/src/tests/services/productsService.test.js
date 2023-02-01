const Sinon = require("sinon");
const { expect } = require("chai");

const { Product } = require('../../database/models');
const productsService = require('../../services/products.service');

const { productsModelOutput } = require("./mocks/productsMock");

describe('Product Service Tests', () => {

  afterEach(() => {
    Sinon.restore();
  });

  describe('Services', () => {
    it('Get All - success', async () => {
      Sinon.stub(Product, 'findAll').resolves(productsModelOutput);

      const result = await productsService.getAll();

      expect(result).to.be.deep.equal({type: null, message: productsModelOutput});
    });
  });

});