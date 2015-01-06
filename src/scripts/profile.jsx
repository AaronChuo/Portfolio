/**
 * Portfolio Profile Page
 *
 * Component structure:
 * 
 * |- Profile
 *     |- Photo
 *     |- PersonalInfo
 *         |- Row
 *     |- SkillList
 *         |- Skill
 */
'use strict';

var Profile = React.createClass({
  render: function () {
    return (
      <div id="profile" className="page profile">
        <Photo />
        <PersonalInfo />
        <SkillList />
      </div>
    );
  }
});

var Photo = React.createClass({
  getInitialState: function () {
    if(!this.state.url) {
      this.setState({show: false});
    } else {
      this.setState({show: true});
    }
  },

  render: function () {
    return (
      <div className="photo">
        <img src={this.state.url} />
      </div>
    );
  }
});

var PersonalInfo = React.createClass({
  render: function () {
    var infoNodes = this.state.data.map(function (info) {
      return (
        <li>
          <span class="info-field">{info.field}</span>
          <span class="info-value">{info.text}</span>
        </li>
      );
    });

    return (
      <ul className="personal-info">
        {infoNodes}
      </ul>
    );
  }
});

var SkillList = React.createClass({
  render: function () {

    return (
      <div className="skill-list">
        <Skill />
      </div>
    )
  }
});
