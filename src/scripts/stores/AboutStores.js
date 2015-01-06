/**
 * About Stores
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Actions = require('../actions/AppActionCreator');

var EventEmitter = require('events').EventEmitter;


var AboutStores = {

  "profile_url": null,

  "personal_info": [
    
    {
      "field": "name",
      "text": "Aaron"
    }

  ],

  "skills": [

    {
      "title": "Hello"
    }

  ]

};

module.exports = AboutStores;
