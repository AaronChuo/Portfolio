/**
 * Footer
 */

'use strict';

var Footer = React.createClass({

  /**
   * Renderer
   */
  render: function () {

    return (

      <footer>
        <p className="footer">
          &copy; Designed by <a href="https://github.com/AaronChuo" target="_blank" title="Visit my GitHub">Aaron</a>. MIT License.
        </p>
      </footer>

    );

  }

});

module.exports = Footer;
