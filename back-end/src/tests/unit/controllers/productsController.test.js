const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const { expect } = require('chai');
const controller = require('../../../controller');
const { productsService } = require('../../../services');
const { productsModelOutput } = require('../services/mocks/productsMock');

chai.use(sinonChai);

describe('Products Controller Tests', () => {
  afterEach(sinon.restore);

  it('should return all products - success', async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'getAll').resolves({type: null, message: productsModelOutput});

    await controller.productsController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWithMatch({message: productsModelOutput});
  });

  it('should return all products - fail', async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'getAll').resolves({type: 500, message: 'Erro'});

    await controller.productsController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(500);
    expect(res.json).to.have.been.calledWithMatch({message: 'tá zuado'});
  });
});
