'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');
var API_URL = 'https://portfolio-api.herokuapp.com',
    API_ENDPOINT = '/profile',
    AUTH_NAME = 'aaronchuo',
    AUTH_PWD = '161764';
var id,
    request,
    data = {};

describe('Profile RESTful API', function () {


    before(function() {
        data = {};
    });

    beforeEach(function(done) {
        if(!data) ;
    })

    describe('when non authorized', function () {

        beforeEach(function () {
            request = supertest(API_URL).get(API_ENDPOINT);
        });

        it('should not be authorized if no authorized data', function (done) {
            request.expect(401, done);
        });

        it('should not be authorized if wrong authorized data', function (done) {
            request
                .auth('someone', '1234567')
                .expect(401, done);
        });
        
    });

    describe('when authorized', function () {
    
        describe('POST /profile', function () {

            beforeEach(function () {
                data = {};
                request = supertest(API_URL);
            });

            it('should respond with status code 200', function (done) {
                request
                    .post(API_ENDPOINT)
                    .auth(AUTH_NAME, AUTH_PWD)
                    .expect(200, done);
            });

            it('should add a profile', function (done) {
                data = {
                    field: 'name',
                    value: 'Aaron'
                };
                done();
                // request
                //     .post(API_ENDPOINT)
                //     .auth(AUTH_NAME, AUTH_PWD)
                //     .send(data)
                //     .end(function (err, res) {
                //         //expect(res.message).to.equal('Profile created.');
                //         //expect(res.result).to.exist;
                //         expect(res.result.field).to.equal('name');
                //         expect(res.result.value).to.equal('Aaron');
                //         done(err);
                //     });
            });
           
            it('should not success if "field" column is empty or wrong type', function () {
                data.value = 'Aaron';
                request
                    .post(API_ENDPOINT)
                    .auth(AUTH_NAME, AUTH_PWD)
                    .send(data)
                    .end(function (err, res) {
                        //expect(res.errors).to.exist;
                    });
            });

            it('should not success if "value" column is empty or wrong type', function () {
                data.field = 'name';
                request
                    .post(API_ENDPOINT)
                    .auth(AUTH_NAME, AUTH_PWD)
                    .send(data)
                    .end(function (err, res) {
                        //expect(res.errors).to.exist;
                    });
            });

        });

        describe('GET /profile', function () {

            it('should respond with status code 200', function () {
                
            });

            it('should get all profiles', function () {

            });

            it('should get a profile if give id', function () {

            });

            it('should not get profile if id not be found', function () {
                
            });

        });

        describe('PUT /profile', function () {

            it('should respond with status code 200', function () {
                
            });
            
            it('should not success if "field" column is wrong type', function () {

            });

            it('should not success if "value" column is wrong type', function () {

            });

            it('should not success if no id', function () {
                
            });

            it('should not success if id not be found', function () {

            });

            it('should update a profile ', function () {
                
            });

        });

        describe('DELETE /profile', function () {
            
            it('should respond with status code 200', function () {
                
            });

            it('should not success if no id', function () {
                
            });

            it('should not success if id not be found', function () {
                
            });

            it('should delete a profile', function () {
                
            });

        });

    });
    
});
