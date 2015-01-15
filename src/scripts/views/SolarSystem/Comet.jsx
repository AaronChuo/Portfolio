/**
 * Comet
 */

'use strict';

var TimePoint = require('./TimePoint.jsx');

var Comet = React.createClass({

  /**
   * 
   */
  render: function () {

    var pointNodes = [];

    for(var i = 0; i < this.props.data.length; i++) {

      var currentPoint = this.props.data[i];
      pointNodes.push(

        <TimePoint key={currentPoint.timestamp} data={currentPoint} />

      );

    }
    
    //
    return (

      <div className="comet">
        <ul>
          {pointNodes}
        </ul>
      </div>

    );

  }

});

module.exports = Comet;
