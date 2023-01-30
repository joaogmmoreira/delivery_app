const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const { expect } = require('chai');
const controller = require('../../../controller');
const { loginOutput } = require('./mocks/loginMocks');
const { loginService } = require('../../../services');
const { loginServiceReturn } = require('../services/mocks/servicesMocks');

chai.use(sinonChai);

describe('Test Client endpoints', () => {
  afterEach(sinon.restore);

  it('should create a client', async () => {
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
});
