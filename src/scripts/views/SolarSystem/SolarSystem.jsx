/**
 * Solar System
 */

'use strict';

var Star = require('./Star.jsx');
var Planet = require('./Planet.jsx');
var Satellite = require('./Satellite.jsx');
var Comet = require('./Comet.jsx');

var SolarSystem = React.createClass({
  
  /**
   * 
   */
  render: function () {

    //
    var systemMembers = this.props.data.map(function (member) {

      var memberNode;

      switch(member.type) {

        // Star
        case 'star':

          memberNode = <Star key={member.name} data={member} />
          break;

        // Planet
        case 'planet':

          memberNode = <Planet key={member.name} data={member} />
          break;

        // Satellite
        case 'satellite':

          memberNode = <Satellite key={member.name} data={member} />
          break;

        // Comet
        case 'comet':

          memberNode = <Comet key={member.name} data={member} />
          break;

        //
        default:

          break;

      }

      return memberNode;

    });

    //
    return (

      <div className="solar-system">
        {systemMembers}
      </div>

    );

  }

});

module.exports = SolarSystem;
