'use strict';

var expect = require('chai').expect;
var supertest = require('supertest');
var request = supertest('https://portfolio-api.herokuapp.com');
var data = {},
    id,
    authName = 'aaronchuo',
    authPwd = '161764';

describe('Experience RESTful API', function () {

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
    
        describe('POST /exp', function () {

            it('should respond with status code 200', function () {
                
            });

            it('should not success if "title" column is empty or wrong type', function () {
                
            });

            it('should not success if "desc" column is empty or wrong type', function () {
                
            });

            it('should not success if "date" column is empty or wrong type', function () {
                
            });

            it('should add an experience', function () {
                
            });

        });

        describe('GET /exp', function () {

            it('should respond with status code 200', function () {
                
            });

            it('should get all experiences', function () {

            });

            it('should get an experience if give id', function () {

            });

            it('should not get experience if id not be found', function () {
                
            });

        });

        describe('PUT /exp', function () {

            it('should respond with status code 200', function () {
                
            });
            
            it('should not success if "title" column is wrong type', function () {

            });

            it('should not success if "desc" column is wrong type', function () {

            });

            it('should not success if "date" column is wrong type', function () {

            });

            it('should not success if no id', function () {
                
            });

            it('should not success if id not be found', function () {

            });

            it('should update an experience ', function () {
                
            });

        });

        describe('DELETE /exp', function () {
            
            it('should respond with status code 200', function () {
                
            });

            it('should not success if no id', function () {
                
            });

            it('should not success if id not be found', function () {
                
            });

            it('should delete an experience', function () {
                
            });

        });

    });

});