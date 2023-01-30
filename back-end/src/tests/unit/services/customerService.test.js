const Sinon = require("sinon");
const { expect } = require("chai");

const { Sale } = require('../../../database/models');
const customerService = require('../../../services/customer.service');

const { customerOrdersModelOutput } = require("./mocks/servicesMocks");

describe('Customer Service Tests', () => {

  afterEach(() => {
    Sinon.restore();
  });

  describe('Customers', () => {
    it('Get All from One - success', async () => {
      Sinon.stub(Sale, 'findAll').resolves(customerOrdersModelOutput);

      const result = await customerService.getAllCustomerOrders();

      expect(result).to.be.deep.equal({type: null, message: customerOrdersModelOutput});
    });
  });

});