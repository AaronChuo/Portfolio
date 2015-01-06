/**
 * About Page
 *
 * Component structure:
 * 
 * |- About
 *     |- Profile
 *     |- PersonalInfo
 *         |- Row
 *     |- SkillList
 *         |- Skill
 */

'use strict';

var Profile = require('./Profile.jsx');
var PersonalInfo = require('./PersonalInfo.jsx');
var SkillList = require('./SkillList.jsx');

var AboutStores = require('../../stores/AboutStores');

var About = React.createClass({

  /**
   * Initial states
   */
  getInitialState: function () {

    return AboutStores;

  },

  /**
   * Renderer
   */
  render: function () {
    
    return (

      <div id="about" className="page page-about">
        <Profile url={this.state.profile_url} />
        <PersonalInfo data={this.state.personal_info} />
        <SkillList data={this.state.skills} />
      </div>

    );

  }

});

module.exports = About;
