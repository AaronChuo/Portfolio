/**
 * Planet
 */

'use strict';

var Planet = React.createClass({

  /**
   * 
   */
  mouseOverHandler: function (evt) {

    evt.stopPropagation();
    evt.preventDefault();

    evt.target.style.border = '1px solid #FFF';

  },

  /**
   * 
   */
  mouseOutHandler: function (evt) {

    evt.target.style.border = 'none';

  },

  /**
   * 
   */
  render: function () {

    var orbitClasses = "orbit orbit-" + this.props.data.objectId;
    var planetClasses = "planet planet-" + this.props.data.objectId;

    return (

      <div className={orbitClasses}>
        <div className={planetClasses} onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler}></div>
      </div>

    );

  }

});

module.exports = Planet;
