const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const { expect } = require('chai');
const controller = require('../../../controller');
const { salesService } = require('../../../services');
const { salesModelOutput, oneSaleModelOutput, productsFromSale } = require('../services/mocks/salesMocks');

chai.use(sinonChai);

describe('Sales Controller Tests', () => {
  afterEach(sinon.restore);

  describe('Get Sales by seller', () => {
    it('should get all sales with one seller id - success', async () => {
      const req = {
        params: {
          sellerId: 1,
        },
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesService, 'getAll')
        .resolves({ type: null, message: salesModelOutput });

      await controller.salesController.getAllBySeller(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithMatch({ message: salesModelOutput });
    });
    it('should get all sales with one seller id - fail', async () => {
      const req = {
        params: {
          sellerId: 1,
        },
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesService, 'getAll')
        .resolves({ type: 404, message: 'erro' });

      await controller.salesController.getAllBySeller(req, res);

      expect(res.status).to.have.been.calledWith(404);
    });
  });

  describe('Get One Sale', () => {
    it('should get one sale - success', async () => {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesService, 'getOne')
        .resolves({ type: null, message: oneSaleModelOutput });

      await controller.salesController.getOne(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithMatch({ message: oneSaleModelOutput });
    });
    it('should get one sale - fail', async () => {
      const req = {
        params: {
          id: 1,
        },
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesService, 'getOne')
        .resolves({ type: 404, message: 'erro' });

      await controller.salesController.getOne(req, res);

      expect(res.status).to.have.been.calledWith(404);
    });

    describe('Get Products from Sale', () => {
      it('should get all products from a sale - success', async () => {
        const req = {
          params: {
            id: 1,
          },
        };
        const res = {};
  
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        sinon
          .stub(salesService, 'getSaleProducts')
          .resolves({ type: null, message: productsFromSale });
  
        await controller.salesController.getSaleProducts(req, res);
  
        expect(res.status).to.have.been.calledWith(200);
        expect(res.json).to.have.been.calledWithMatch({ message: productsFromSale });
      });

      it('should get all products from a sale - fail', async () => {
        const req = {
          params: {
            id: 1,
          },
        };
        const res = {};
  
        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();
        sinon
          .stub(salesService, 'getSaleProducts')
          .resolves({ type: 404, message: 'No sales registered' });
  
        await controller.salesController.getSaleProducts(req, res);
  
        expect(res.status).to.have.been.calledWith(404);
        expect(res.json).to.have.been.calledWithMatch({ message: 'No sales registered' });
      });
    });

  });
});
