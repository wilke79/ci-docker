let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server.js');
let should = chai.should();


chai.use(chaiHttp);

describe('/GET pictures', () => {
  it('it should GET all pictures', (done) => {
    chai.request(server)
      .get('/api/pictures')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.should.be.a('array');
        res.body.data.length.should.be.eql(2);
        done();
      });
  });
});

