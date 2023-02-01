const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const { expect } = require('chai');
const controller = require('../../controller');
const { usersService } = require('../../services');
const { userById, allUsers } = require('./mocks/userMocks');

chai.use(sinonChai);

describe('Users Controller Tests', () => {
  afterEach(sinon.restore);

  it('should return user by id - success', async () => {
    const req = {
      params: { id: 1 }
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(usersService, 'getUserById').resolves({type: null, message: userById});

    await controller.usersController.getUserById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWithMatch({message: userById});
  });

  it('should return user by id - fail', async () => {
    const req = {
      params: { id: 1 }
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(usersService, 'getUserById').resolves({type: 404, message: 'error'});

    await controller.usersController.getUserById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWithMatch({message: 'error'});
  });

  it('should return all users - success', async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(usersService, 'getAllUsers').resolves({type: null, message: allUsers});

    await controller.usersController.getAllUsers(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWithMatch({message: allUsers});
  });

  it('should return all users - fail', async () => {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(usersService, 'getAllUsers').resolves({type: 404, message: 'error'});

    await controller.usersController.getAllUsers(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWithMatch({message: 'error'});
  });

});
