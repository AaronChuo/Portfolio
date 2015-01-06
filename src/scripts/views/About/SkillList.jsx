/**
 * SkillList
 */

'use strict';

var Skill = require('./Skill.jsx');

var SkillList = React.createClass({

  /**
   * Renderer
   */
  render: function () {

    var skillNodes = this.props.data.map(function (skill) {

      return (

        <Skill key={skill.title} data={skill} />

      );

    });

    return (

      <ul className="skill-list">
        {skillNodes}
      </ul>

    );

  }

});

module.exports = SkillList;
