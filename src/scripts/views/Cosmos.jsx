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

var CosmosStores = require('../stores/CosmosStores.js');

var Cosmos = React.createClass({

  /**
   * 
   */
  getInitialState: function () {

    return Actions.selectData(app);

  },

  /**
   * 
   */
  render: function () {

    return (

      <div className="cosmos">
        <ControlPanel itemList={this.state.app.itemList} onClickItem={this.viewChangeHandler} />
        <SolarSystem data={this.state.data} />
      </div>

    );

  }

});

module.exports = Cosmos;
