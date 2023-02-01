const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const { expect } = require('chai');
const controller = require('../../controller');

chai.use(sinonChai);

describe('Images Controller Tests', () => {
  afterEach(sinon.restore);

  it('Get Image - success', async () => {
    const req = {
      params: { imgName: 'mock' }
    };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    res.sendFile = sinon.stub().returns('image');

    await controller.imagesController.getProductImgByImgName(req, res);

    expect(res.sendFile).to.have.been.calledWithMatch('mock');
  });

  // it('Get Image - fail', () => {
  //   const req = {
  //     params: { imgName: 'mock' }
  //   };
  //   const res = {};

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();
  //   res.sendFile = sinon.stub().throwsException();

  //   controller.imagesController.getProductImgByImgName(req, res);

  //   expect(() => res.sendFile).to.have.been.throws();
  // });
});
