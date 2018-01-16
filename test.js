'use strict';
var assert = require('assert');
var http = require('http');
var testServer = require('./server.js');
var express = require('express');
var port = testServer();
var rootUrl = 'http://127.0.0.1:' + port + '/';

console.log('Mocha Test Server listening on port ' + port);

// This test should always pass, it proves that Node is running prior to testing.
describe('Node Tests', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});

// HTTP Server tests will test Express endpoints.
describe('HTTP Server Tests', function() {


    before(function() {
        // Not needed yet, nothing to start up.
    });

    after(function() {
        // Not needed yet, nothing to clean up.
    });

    describe(rootUrl + 'dude', function() {
        it('Should respond with 302 redirect.', function(done) {
            http.get(rootUrl + 'dude', function(response) {
                assert.equal(response.statusCode, 302);
                done();
            });
        });

        it('Should redirect to root.', function(done) {
            http.get(rootUrl + 'dude', function(response) {
                assert.equal(response.url, '');
                done();
            });
        });
    });

    describe(rootUrl + 'index.htm', function() {
        it('Should respond with 302 redirect.', function(done) {
            http.get(rootUrl + 'index.htm', function(response) {
                assert.equal(response.statusCode, 302);
                done();
            });
        });

        it('Should redirect to root.', function(done) {
            http.get(rootUrl + 'dude', function(response) {
                assert.equal(response.url, '');
                done();
            });
        });
    });

    describe(rootUrl, function() {
        it('Should respond with the root web page.', function(done) {
            http.get(rootUrl, function(response) {
                var body = '';
                response.on('data', function(d) {
                    body += d;
                });

                response.on('end', function() {
                    assert.equal(body.includes('TKW'), true);
                    done();
                });
            });
        });
    });

});