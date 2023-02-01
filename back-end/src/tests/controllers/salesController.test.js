const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');
const { expect } = require('chai');
const controller = require('../../controller');
const { salesService } = require('../../services');
const {
  salesModelOutput,
  oneSaleModelOutput,
  productsFromSale,
  updateSaleMessage,
  saleData,
  createSaleModelOutput,
} = require('../services/mocks/salesMocks');

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
      expect(res.json).to.have.been.calledWithMatch({
        message: salesModelOutput,
      });
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
      expect(res.json).to.have.been.calledWithMatch({
        message: oneSaleModelOutput,
      });
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
      expect(res.json).to.have.been.calledWithMatch({
        message: productsFromSale,
      });
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
      expect(res.json).to.have.been.calledWithMatch({
        message: 'No sales registered',
      });
    });
  });

  describe('Edit Sale Status', () => {
    it('should update sale status - success', async () => {
      const req = {
        params: {
          id: 1,
        },
        body: {
          status: 'Entregue',
        },
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesService, 'updateStatus')
        .resolves({ type: null, message: updateSaleMessage });

      await controller.salesController.updateStatus(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWithMatch({
        message: updateSaleMessage,
      });
    });
    it('should update sale status - fail - bad request', async () => {
      const req = {
        params: {
          id: 1,
        },
        body: {
          status: 'Errado',
        },
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesService, 'updateStatus')
        .resolves({ type: null, message: updateSaleMessage });

      await controller.salesController.updateStatus(req, res);

      expect(res.status).to.have.been.calledWith(400);
      expect(res.json).to.have.been.calledWithMatch({
        message: 'Invalid status request',
      });
    });
    it('should update sale status - fail - bad request', async () => {
      const req = {
        params: {
          id: 1,
        },
        body: {
          status: 'Entregue',
        },
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesService, 'updateStatus')
        .resolves({ type: 404,  message: 'Sale not found' });

      await controller.salesController.updateStatus(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWithMatch({
        message: 'Sale not found' ,
      });
    });
  });

  describe('Create Sale', () => {
    it('should create a sale - success', async () => {
      const req = {
        params: {
          id: 1,
        },
        body: saleData,
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesService, 'createSale')
        .resolves({ type: null, message: createSaleModelOutput });

      await controller.salesController.createSale(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWithMatch({
        message: createSaleModelOutput,
      });
    });
    it('should create a sale - fail', async () => {
      const req = {
        params: {
          id: 1,
        },
        body: saleData,
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesService, 'createSale')
        .resolves({ type: 500, message: 'Internal Error' });

      await controller.salesController.createSale(req, res);

      expect(res.status).to.have.been.calledWith(500);
      expect(res.json).to.have.been.calledWithMatch({
        message: 'Internal Error',
      });
    });
  });
});
