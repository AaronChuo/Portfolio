/**
 * Portfolio Page Wrapper
 *
 * Component structure:
 * 
 * |- PageWrapper
 *     |- NavBar
 *     |- ProgressBar
 *     |- PageSet
 *         |- Profile
 *         |- Works
 *         |- Experience
 *         |- Contact
 *     |- Footer
 */

'use strict';

var NavBar = require('./NavBar.jsx');
var ProgressBar = require('./ProgressBar.jsx');
var PageSet = require('./PageSet.jsx');
var Footer = require('./Footer.jsx');

var AppWrapper = React.createClass({

  /**
   * Renderer
   */
  render: function () {
    
    return (

      <div className="page-wrapper">
        <h1></h1>
        <NavBar />
        <ProgressBar />
        <PageSet />
        <Footer />
      </div>

    );

  }

});

module.exports = AppWrapper;
