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

    //
    var timePoints = this.props.data.content.map(function (point) {

      return (

        <TimePoint key={point.timestamp} data={point} />

      );

    });
    
    //
    return (

      <div className="comet">
        <ul>
          {timePoints}
        </ul>
      </div>

    );

  }

});

module.exports = Comet;
