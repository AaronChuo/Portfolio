/**
 * Cosmos Stores
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants.js');
var Actions = require('../actions/AppActionCreator');

var EventEmitter = require('events').EventEmitter;

var CosmosStores = new EventEmitter();

var db = {

  app: {

    // selected item name
    selectedItemName: null,

    //
    itemList: [

      {
        name: 'profile',
        text: 'Profile'
      },

      {
        name: 'skills',
        text: 'Skills'
      },

      {
        name: 'experiences',
        text: 'Experiences'
      },

      {
        name: 'works',
        text: 'Works'
      },

      {
        name: 'contact',
        text: 'Contact'
      }

    ]

  },

  data: [

    // profile
    {
      name: 'profile',
      type: 'star',
      content: []
    },

    // skills
    {
      name: 'skills',
      type: 'planet',
      content: []
    },

    // works
    // experience
    // contact

  ]

};

CosmosStores.dispatchToken = AppDispatcher.register( function eventHandler (evt) {

  // evt.actionType
  // evt.data = {} or []
  // evt.data.keyPath
  // evt.data.value    (optional in select, delete)
  
  evt.data = !evt.data.hasOwnProperty('length') ? [evt.data] : evt.data;

  switch(evt.actionType) {

    //
    case AppConstants.CREATE_DATA:

      for(var i = 0, item; i < evt.data.length; i++) {

        item = evt.data[i];
        literalObject( item.keyPath ).set( item.value );

      }

      break;

    //
    case AppConstants.SELECT_DATA:

      for(var i = 0, item; i < evt.data.length; i++) {

        item = evt.data[i];
        literalObject( item.keyPath ).get();

      }

      break;

    //
    case AppConstants.UPDATE_DATA:

      for(var i = 0, item; i < evt.data.length; i++) {

        item = evt.data[i];
        literalObject( item.keyPath ).set( item.value );

      }

      break;

    //
    case AppConstants.DELETE_DATA:

      for(var i = 0, item; i < evt.data.length; i++) {

        item = evt.data[i];
        literalObject( item.keyPath ).set( null );

      }

      break;

  }

});

function literalObject (strKeyPath) {

  var patterns = {
    
    separator: /\[|\[\'|\[\"|\./g,
    remove: /\]|\'\]|\"\]/g

  };

  //
  var assignValue = function (value) {

    if(typeof strKeyPath === 'string') {

      var result, covertedKeyPath;

      covertedKeyPath = strKeyPath                                      // "a.b['name'].c[0].d['name'][0]"
                          .replace( patterns.indexRight, '' )           // "a.b['name.c[0.d['name[0"
                          .replace( patterns.indexLeft, patterns.dot )  // "a.b.name.c.0.d.name.0"
                          .split('.');                                  // ["a","b","name","c","0","d","name","0"]
      
      for(var i = 0; i < covertedKeyPath.length; i++) {

        if(i === covertedKeyPath.length - 1) {
          result[i] = value;
        } else {
          result = result[i];
        }

      }

      return result;

    }

  }

  return {

    //
    set: function (value) {

      return assignValue(value);

    },

    //
    get: function () {

      return result;

    }

  };

}

module.exports = db;
