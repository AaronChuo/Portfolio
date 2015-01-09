'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants.js');

var action = {};
var AppActionCreator = {

  /**
   * Create
   */
  createData: function (data) {

    action = {
      actionType: AppConstants.CREATE_DATA,
      data: data
    };

    AppDispatcher.dispatch(action);

  },

  /**
   * Select
   */
  selectData: function (data) {

    action = {
      actionType: AppConstants.SELECT_DATA,
      data: data
    };

    AppDispatcher.dispatch(action);

  },

  /**
   * Update
   */
  updateData: function (data) {

    action = {
      actionType: AppConstants.UPDATE_DATA,
      data: data
    };

    AppDispatcher.dispatch(action);

  },

  /**
   * Delete
   */
  deleteData: function (data) {

    action = {
      actionType: AppConstants.DELETE_DATA,
      data: data
    }

    AppDispatcher.dispatch(action);

  }

};

module.exports = AppActionCreator;
