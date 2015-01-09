/**
 * app.js
 */

'use strict';

var Cosmos = React.createFactory(require('./views/Cosmos.jsx'));


/**
 * Application start up singleton
 */


  // application view render
  React.render(
    Cosmos(),
    document.getElementById('container')
  );


