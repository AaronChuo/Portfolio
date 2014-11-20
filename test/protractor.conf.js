// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.43.1.jar', // Make use you check the version in the folder
  chromeDriver: '../node_modules/protractor/selenium/chromedriver',
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  //specs: ['test/e2e/**/*.js'],

  framework: 'mocha',

  mochaOpts: {
    ui: 'bdd',
    reporter: 'nyan'
  },

  onPrepare: function() {
    var chai = require('chai');
    var chaiAsPromised = require('chai-as-promised');

    chai.use(chaiAsPromised);

    global.expect = chai.expect;
  }
};
