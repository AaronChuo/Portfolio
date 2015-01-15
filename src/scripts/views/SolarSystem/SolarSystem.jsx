/**
 * Solar System
 */

'use strict';

var Star = require('./Star.jsx');
var Planet = require('./Planet.jsx');
var Satellite = require('./Satellite.jsx');
var Comet = require('./Comet.jsx');

var AppStores = require('../../stores/AppStores.js');

var SolarSystem = React.createClass({

  /**
   * 
   */
  render: function () {
    var objectNodes = [];

    for(var i = 0, currentObject; i < this.props.data.objects.length; i++) {
      currentObject = this.props.data.objects[i];
      switch(currentObject.type) {

        // star
        case 'star':

          objectNodes.push(

            <Star key={currentObject.objectId} data={currentObject} />

          );

          break;

        // Planet
        case 'planet':

          objectNodes.push(

            <Planet key={currentObject.objectId} data={currentObject} />

          );

          break;

        // Satellite
        case 'satellite':

          objectNodes.push(

            <Satellite key={currentObject.objectId} data={currentObject} />

          );

          break;

        // Comet
        case 'comet':

          objectNodes.push(

            <Comet key={currentObject.objectId} data={currentObject} />

          );

          break;

        //
        default:

          break;

      }

    }

    //
    return (

      <div className="solar-system">
        {objectNodes}
      </div>

    );

  }

});

module.exports = SolarSystem;
