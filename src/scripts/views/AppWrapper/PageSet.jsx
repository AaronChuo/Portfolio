/**
 * PageSet
 */
'use strict';

var About = require('../About/About.jsx');
//var Works = require('./../About/Works.jsx');
//var Experience = require('./../About/Experience.jsx');
//var Contact = require('./../About/Contact.jsx');

var PageSet = React.createClass({

  /**
   * 
   */
  getDefaultProps: function () {

    return {
      title: ['page-profile', 'page-works', 'page-exp']
    };
  
  },


  /**
   * Renderer
   */
  render: function () {

    // mapping each page
    var pageNodes = this.props.title.map(function (pageTitle) {

      var node;

      switch(pageTitle) {

        // 所有 children 都一定要有key props
        case 'page-profile':

          node = <About key={pageTitle} />
          break;

        //
        // case 'page-works':

        //   node = <Works />
        //   break;

        // //
        // case 'page-exp':

        //   node = <Experience />
        //   break;

        // //
        // case 'page-contact':

        //   node = <Contact />
        //   break;

        //
        default:

          break;

      }


      return node;

    });

    // render
    return (

      <div className="pageset">
        {pageNodes}
      </div>

    );

  }
  
});

module.exports = PageSet;
