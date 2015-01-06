'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');
var request = supertest('https://portfolio-api.herokuapp.com');
var data = {},
    id,
    authName = 'aaronchuo',
    authPwd = '161764';

describe('Work RESTful API', function () {

	describe('when non authorized', function () {

        it('should not be authorized if no authorized data', function (done) {
            request
                .get('/profile')
                .expect(401, done);
        });

        it('should not be authorized if wrong authorized data', function (done) {
            request
                .get('/profile')
                .auth('someone', '1234567')
                .expect(401, done);
        });
        
    });

    describe('when authorized', function () {

    	describe('Work API', function () {
    
            describe('POST /work', function () {

                it('should respond with status code 200', function () {
                    
                });

                it('should not success if "name" column is empty or wrong type', function () {
                    
                });

                it('should not success if "desc" column is empty or wrong type', function () {
                    
                });

                it('should add a work', function () {
                    
                });

            });

            describe('GET /work', function () {

                it('should respond with status code 200', function () {
                    
                });

                it('should get all works', function () {

                });

                it('should get a work if give id', function () {

                });

                it('should not get work if id not be found', function () {
                    
                });

            });

            describe('PUT /work', function () {

                it('should respond with status code 200', function () {
                    
                });
                
                it('should not success if "name" column is wrong type', function () {

                });

                it('should not success if "desc" column is wrong type', function () {

                });

                it('should not success if no id', function () {
                    
                });

                it('should not success if id not be found', function () {

                });

                it('should update a work ', function () {
                    
                });

            });

            describe('DELETE /work', function () {
                
                it('should respond with status code 200', function () {
                    
                });

                it('should not success if no id', function () {
                    
                });

                it('should not success if id not be found', function () {
                    
                });

                it('should delete a work', function () {
                    
                });

            });

        });

	});

});