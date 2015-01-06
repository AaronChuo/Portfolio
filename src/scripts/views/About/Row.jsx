/**
 * Row
 */

'use strict';

var Row = React.createClass({

  /**
   * Renderer
   */
  render: function () {

    return (

      <li>
        <span className="row-field">{this.props.field}</span>
        <span className="row-text">{this.props.text}</span>
      </li>

    );

  }

});

module.exports = Row;
