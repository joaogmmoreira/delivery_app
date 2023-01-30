const Sinon = require("sinon");
const { expect } = require("chai");

const { Sale } = require('../../../database/models');
const salesService = require('../../../services/sales.service');

const { salesModelOutput } = require("./mocks/salesMocks");

describe('Sale Service Tests', () => {

  afterEach(() => {
    Sinon.restore();
  });

  describe('Services', () => {
    it('Get All by seller - success', async () => {
      Sinon.stub(Sale, 'findAll').resolves(salesModelOutput);

      const result = await salesService.getAll(1);

      expect(result).to.be.deep.equal({type: null, message: salesModelOutput});
    });
  });

});