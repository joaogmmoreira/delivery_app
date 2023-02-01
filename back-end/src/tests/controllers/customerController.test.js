const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const { expect } = require('chai');
const controller = require('../../controller');
const { customerService } = require('../../services');
const { customerOrdersModelOutput } = require('../services/mocks/servicesMocks');

chai.use(sinonChai);

describe('Customer Controller Tests', () => {
  afterEach(sinon.restore);

  it('should return all orders - success', async () => {
    const req = {
      params: { id: 1 }
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(customerService, 'getAllCustomerOrders').resolves({type: null, message: customerOrdersModelOutput});

    await controller.customerController.getAllCustomerOrders(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWithMatch({message: customerOrdersModelOutput});
  });

  it('should return all orders - success', async () => {
    const req = {
      params: { id: 1 }
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(customerService, 'getAllCustomerOrders').resolves({type: 404, message: 'error'});

    await controller.customerController.getAllCustomerOrders(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWithMatch({message: 'error'});
  });

});
