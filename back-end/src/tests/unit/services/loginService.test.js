const Sinon = require("sinon");
const { User } = require('../../../database/models');
const { loginModelOutput, token, loginServiceReturn, wrongLoginServiceReturn, registerUserReqBody, loginServiceRegisterUserReturn, createUserReturn, userExistsError } = require("./servicesMocks");
const loginService = require('../../../services/login.service');
const jwt = require('jsonwebtoken');
const { expect } = require("chai");

describe('Login Service Tests', () => {

  afterEach(() => {
    Sinon.restore();
  });

  describe('Login', () => {
    it('Login - success', async () => {
      Sinon.stub(User, 'findOne').resolves(loginModelOutput);
      Sinon.stub(jwt, 'sign').returns(token);

      const result = await loginService.login({ email: 'zebirita@email.com', password: '$#zebirita#$' });

      expect(result).to.be.deep.equal(loginServiceReturn);
    });

    it('Login - fail - wrong password', async () => {
      Sinon.stub(User, 'findOne').resolves(loginModelOutput);
      Sinon.stub(jwt, 'sign').returns(token);

      const result = await loginService.login({ email: 'zebirita@email.com', password: 'wrongpassword' });

      expect(result).to.be.deep.equal(wrongLoginServiceReturn);
    });
  });


  describe('Register User', () => {
    it('Register User - success', async () => {
      Sinon.stub(User, 'findOne').resolves(false);
      Sinon.stub(User, 'create').resolves(createUserReturn);
      Sinon.stub(jwt, 'sign').returns(token);

      const result = await loginService.registerUser(registerUserReqBody);

      expect(result).to.be.deep.equal(loginServiceRegisterUserReturn);
    });

    it('Register User - fail', async () => {
      Sinon.stub(User, 'findOne').resolves(true);

      const result = await loginService.registerUser(registerUserReqBody);

      expect(result).to.be.deep.equal(userExistsError);
    });
  });

});