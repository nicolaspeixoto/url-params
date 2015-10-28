var chai = require('chai'),
    should = chai.should();

var urlParams = require('./');

describe('test', function(){
    describe('url-params', function(){
        it('should be a function', function(){
            urlParams.should.be.an('function');
        });

        it('should parse parameters from a url', function(){
            var result = urlParams('http://foo.com/:myParameter/test', {myParameter: 'bar'});
            result.should.equal('http://foo.com/bar/test');
        });

        it('should throw Error when parameter isn\'t found', function(){
            urlParams.bind(null, 'http://foo.com/:myParameter/test', {otherParameter: 'bar'}).should.Throw();
        });
    });
});
