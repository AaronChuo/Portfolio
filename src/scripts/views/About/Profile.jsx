/**
 * Profile
 */

'use strict';

var Profile = React.createClass({

  /**
   * Renderer
   */
  render: function () {

    return (

      <div className="profile">
        <img src={this.props.url} />
      </div>

    );

  }

});

module.exports = Profile;
