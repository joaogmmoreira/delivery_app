const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const { expect } = require('chai');
const controller = require('../../controller');
const { loginOutput } = require('./mocks/loginMocks');
const { loginService } = require('../../services');
const { loginServiceReturn } = require('../services/mocks/servicesMocks');

chai.use(sinonChai);

describe('Login Controller Tests', () => {
  afterEach(sinon.restore);

  it('should login - success', async () => {
    const req = {
      body: {
        email: 'zebirita@email.com',
        password: '$#zebirita#$',
      },
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(loginService, 'login').resolves(loginServiceReturn);

    await controller.loginController.validateLogin(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWithMatch(loginOutput);
  });

  it('should login - fail', async () => {
    const req = {
      body: {
        email: 'zebirita@email.com',
        password: '$#zebirita#$',
      },
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(loginService, 'login').resolves({
      type: 404,
      message: 'error',
    });

    await controller.loginController.validateLogin(req, res);

    expect(res.status).to.have.been.calledWith(404);
  });

  it('should create an user - success', async () => {
    const req = {
      body: {
        name: 'Ze Birita Mock',
        email: 'zebirita@email.com',
        password: '$#zebirita#$',
      },
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(loginService, 'registerUser').resolves(loginServiceReturn);

    await controller.loginController.registerUser(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWithMatch(loginOutput);
  });

  it('should create an user - fail', async () => {
    const req = {
      body: {
        name: 'Ze Birita Mock',
        email: 'zebirita@email.com',
        password: '$#zebirita#$',
      },
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(loginService, 'registerUser').resolves({
      type: 409,
      message: 'error',
    });

    await controller.loginController.registerUser(req, res);

    expect(res.status).to.have.been.calledWith(409);
  });
});
