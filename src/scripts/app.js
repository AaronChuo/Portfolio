/**
 * app.js
 */

'use strict';

var AppWrapper = React.createFactory(require('./views/AppWrapper/AppWrapper.jsx'));


/**
 * Application start up singleton
 */


  // application view render
  React.render(
    AppWrapper(),
    document.getElementById('container')
  );


