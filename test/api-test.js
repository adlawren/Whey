var assert = require('assert');
var Api = require('../src/utils/api');

describe('Api', function() {
    describe('#get()', function () {
        it('should return "httpbin.org" as the url in the JSON response', function () {
            Api.get('https://httpbin.org/get').then(function(json) {
                assert.equal(json.headers.Host, 'httpbin.org');
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });
        });
    });

    describe('#post()', function () {
        it('should return the key-value pair which was sent in the body', function () {
            Api.postJSON('https://httpbin.org/post', {
                "test-key" : "test-value"
            }).then(function(json) {
                assert.equal(json.data, JSON.stringify({
                    "test-key" : "test-value"
                }));
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });
        });
    });
});
