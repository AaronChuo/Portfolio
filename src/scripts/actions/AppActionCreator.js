'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var action = {};
var AppActionCreator = {

  /**
   * Select object
   * @param  {string} objectId
   */
  selectObject: function (objectId) {

    AppDispatcher.dispatch({

      actionType: AppConstants.SELECT_OBJECT,
      objectId: objectId

    });

  }

};

module.exports = AppActionCreator;
