const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('Products endpoint tests', () => {
  let chaiHttpResponse;

  afterEach(sinon.restore);
  beforeEach(async () => {
  });

  describe('Get all products', () => {
    it("test", async () => {
      const res = await chai
        .request(app)
        .get("/coffee")
    
      expect(res).to.have.status(418)
    });

    // it('Get products - success', async (done) => {
    //   const res = await chai
    //     .request(app)
    //     .get('/products')
      
    //     expect(res).to.have.status(200)
    //     done();
    // });
  });
});
