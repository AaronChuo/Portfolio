/**
 * Item
 */

'use strict';

var Actions = require('../../actions/AppActionCreator.js');

var Item = React.createClass({

  /**
   * 
   */
  clickHandler: function (evt) {

    evt.stopPropagation();
    evt.preventDefault();

    // In Flux: We pass every action to ActionCreator,
    // ActionCreator will dispatch to Stores to update the data,
    // then the view will be re-rendered by React.
    // this.setState({nowItemId: itemId});
    Actions.updateData({
      keyPath: 'app.selectedItemName',
      value: this.props.data.name
    });

  },

  /**
   * 
   */
  render: function () {

    return (
    
      <li>
        <a href="#" onClick={this.clickHandler}>{this.props.data.text}</a>
      </li>

    );

  }

});

module.exports = Item;
