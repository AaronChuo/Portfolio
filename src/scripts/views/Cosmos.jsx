/**
 * Cosmos
 *
 * My portfolio of 2015
 *
 * - Cosmos
 *   |- ControlPanel
 *       |- Item
 *   |- SolarSystem
 *       |- Star
 *       |- Planet
 *       |- Satellite
 *       |- Comet
 *           |- TimePoint
 * 
 */

'use strict';

var ControlPanel = require('./ControlPanel/ControlPanel.jsx');
var SolarSystem = require('./SolarSystem/SolarSystem.jsx');

var AppStores = require('../stores/AppStores');

var Cosmos = React.createClass({

  /**
   * 
   */
  getInitialState: function () {

    return AppStores.getAll();

  },

  /**
   * 
   */
  render: function () {

    return (

      <div className="cosmos">
        <ControlPanel data={this.state.controlPanel} />
        <SolarSystem data={this.state.solarSystem} />
      </div>

    );

  }

});

module.exports = Cosmos;
