const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const { expect } = require('chai');
const controller = require('../../../controller');
const { loginOutput } = require('./mocks/loginMocks');
const { adminService } = require('../../../services');
const { loginServiceReturn, newUserObjInput, newUserObjOutput } = require('../services/mocks/servicesMocks');
const { productsModelOutput } = require('../services/mocks/productsMock');

chai.use(sinonChai);

describe('Admin Controller Tests', () => {
  afterEach(sinon.restore);

  it('should register an user - success', async () => {
    const req = {
      body: newUserObjInput
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(adminService, 'registerNewUser').resolves({type: null, message: newUserObjOutput});

    await controller.adminController.registerNewUser(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWithMatch({user: newUserObjOutput});
  });

  it('should register an user - success', async () => {
    const req = {
      body: newUserObjInput
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(adminService, 'registerNewUser').resolves({type: 409, message: 'erro'});

    await controller.adminController.registerNewUser(req, res);

    expect(res.status).to.have.been.calledWith(409);
  });
});
