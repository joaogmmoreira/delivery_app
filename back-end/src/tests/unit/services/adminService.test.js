const Sinon = require('sinon');
const { expect } = require('chai');

const { User } = require('../../../database/models');
const adminService = require('../../../services/admin.service');
const jwt = require('jsonwebtoken');

const {
  token,
  newUserObjInput,
  newUserObjOutput,
} = require('./mocks/servicesMocks');

describe('Admin Service Tests', () => {
  afterEach(() => {
    Sinon.restore();
  });

  describe('Admin registration', () => {
    it('Register new user - success', async () => {
      Sinon.stub(User, 'findOne').resolves(null);
      Sinon.stub(User, 'create').resolves(true);
      Sinon.stub(jwt, 'sign').returns(token);

      const result = await adminService.registerNewUser(newUserObjInput);

      expect(result).to.be.deep.equal({
        type: null,
        message: newUserObjOutput,
      });
    });

    it('Register new user - fail', async () => {
      Sinon.stub(User, 'findOne').resolves([{ mock: 'user' }]);

      const result = await adminService.registerNewUser(newUserObjInput);

      expect(result).to.be.deep.equal({
        type: 409,
        message: 'User already exists',
      });
    });
  });
});
