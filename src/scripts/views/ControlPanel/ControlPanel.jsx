/**
 * Control Panel
 */

'use strict';

var Item = require('./Item.jsx');

var ControlPanel = React.createClass({

  /**
   * 
   */
  render: function () {

    var itemList = [];

    for(var i = 0; i < this.props.itemList.length; i++) {

      itemList.push(
        
        <Item key={this.props.itemList[i].name} data={this.props.itemList[i]} />
      
      );

    }

    return (

      <nav>
        <ul>
          {itemList}
        </ul>
      </nav>

    );

  }
 
})

module.exports = ControlPanel;
