/**
 * Control Panel
 */

'use strict';

var Item = require('./Item.jsx');

var AppStores = require('../../stores/AppStores.js');

var ControlPanel = React.createClass({

  /**
   * 
   */
  render: function () {

    var navNodes = [];

    for(var i = 0, item; i < this.props.data.navigation.length; i++) {

      item = this.props.data.navigation[i];

      navNodes.push(
        
        <Item key={item.objectId} data={item} />
      
      );

    }

    return (

      <nav>
        <ul className="navbar">
          {navNodes}
        </ul>
      </nav>

    );

  }
 
})

module.exports = ControlPanel;
