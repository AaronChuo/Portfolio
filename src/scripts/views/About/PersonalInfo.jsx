/**
 * PersonalInfo
 */

'use strict';

var Row = require('./Row.jsx');∑<div></div>

var PersonalInfo = React.createClass({

  /**
   * Renderer
   */
  render: function () {

    var infoNodes = this.props.data.map(function (row) {
      
      return (
        
        <Row key={row.field} field={row.field} text={row.text} />

      );

    });

    return (

      <ul className="personal-info">
        {infoNodes}
      </ul>

    );

  }

});

module.exports = PersonalInfo;
