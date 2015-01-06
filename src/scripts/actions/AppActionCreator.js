'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');

var AppActionCreator = {

  /**
   * Create
   */
  createData: function (data) {

  },

  /**
   * Read
   */
  readData: function (data) {

    AppDispatcher.dispatch(data);

  },

  /**
   * Update
   */
  updateData: function (data) {

  },

  /**
   * Delete
   */
  deleteData: function (data) {

  }

};

module.exports = AppActionCreator;
