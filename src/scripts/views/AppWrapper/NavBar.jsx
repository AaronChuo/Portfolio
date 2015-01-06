/**
 * NavBar
 */
'use strict';

var NavBar = React.createClass({

  /**
   * Renderer
   */
  render: function () {

    return (

      <nav>
        <ul className="navbar">
          <li><a href="">About</a></li>
          <li><a href="">Works</a></li>
          <li><a href="">Experience</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>

    );

  }

});

module.exports = NavBar;
