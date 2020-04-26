var expect  = require('chai').expect;
var request = require('request');

it('API with status 200', function(done) {
    request('http://localhost:3001' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
