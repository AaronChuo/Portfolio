/**
 * Time Point
 */

'use strict';

var TimePoint = React.createClass({

  /**
   * 
   */
  render: function () {

    var formattedDate = new Date(this.props.data.timestamp);

    return (

      <li>
        <h4>
          {this.props.data.title}
          <span className="exp-date">{formattedDate}</span>
        </h4>
        <p className="exp-desc">{this.props.data.desc}</p>
      </li>

    );

  }

});

module.exports = TimePoint;
