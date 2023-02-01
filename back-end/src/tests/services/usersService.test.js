const Sinon = require("sinon");
const { expect } = require("chai");

const { User } = require('../../database/models');
const usersService = require('../../services/users.service');

const { productsModelOutput } = require("./mocks/productsMock");
const { userById, allUsers } = require("../controllers/mocks/userMocks");

describe('Users Service Tests', () => {

  afterEach(() => {
    Sinon.restore();
  });

  describe('Services', () => {
    it('Get by id - success', async () => {
      Sinon.stub(User, 'findOne').resolves(userById);

      const result = await usersService.getUserById();

      expect(result).to.be.deep.equal({type: null, message: userById});
    });

    it('Get All - success', async () => {
      Sinon.stub(User, 'findAll').resolves(allUsers);

      const result = await usersService.getAllUsers();

      expect(result).to.be.deep.equal({type: null, message: allUsers});
    });
  });

});