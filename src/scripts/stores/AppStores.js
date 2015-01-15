/**
 * App Stores
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

/**
 * Data
 * @private
 */
var _AppData = {


  controlPanel: {

    // selected object
    selectedObject: null,

    // navigation list
    navigation: [

      {
        objectId: 'profile',
        text: 'Profile'
      },

      {
        objectId: 'skills',
        text: 'Skills'
      },

      {
        objectId: 'experiences',
        text: 'Experiences'
      },

      {
        objectId: 'works',
        text: 'Works'
      },

      {
        objectId: 'contact',
        text: 'Contact'
      }

    ]

  },

  solarSystem: {

    // object data
    objects: [

      // profile
      {
        objectId: 'profile',
        type: 'star',
        data: []
      },

      // skills
      {
        objectId: 'skills',
        type: 'planet',
        data: []
      },

      // community
      {
        objectId: 'community',
        type: 'planet',
        data: []
      }
      
      // works
      // experience
      // contact

    ]

  }

};

/**
 * Update selected object.
 * @private
 * @param  {string} objectName
 */
function _updateSelectedObject (objectId) {

  _AppData.selectedObject = objectId;

}

/**
 * Public method for component using.
 * @public
 */
var AppStores = assign({}, EventEmitter.prototype, {

  /**
   * Get all of app data.
   * @return {object}
   */
  getAll: function () {
    
    return _AppData;

  },

  /**
   * Emitter of change event.
   */
  emitChange: function () {

    this.emit(AppConstants.CHANGE_EVENT);

  },

  /**
   * Add listener for change event.
   * @param {Function} callback
   */
  addChangeListener: function (callback) {

    this.on(AppConstants.CHANGE_EVENT, callback);

  },

  /**
   * Remove listener.
   * @param  {Function} callback
   */
  removeChangeListener: function (callback) {

    this.removeListener(AppConstants.CHANGE_EVENT, callback);

  }

});

/**
 * Register action to dispatcher.
 */
AppDispatcher.register(function (action) {

  //var action = evt;

  switch(action.actionType) {

    // select object
    case AppConstants.SELECT_OBJECT:

      if(action.objectId) {
        _updateSelectedObject(action.objectId);
        AppStores.emitChange();
        console.log(_AppData.selectedObject)
      }

      break;

    //
    default:

      break;

  }

  return true;

})

module.exports = AppStores;
