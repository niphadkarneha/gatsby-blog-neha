import React, { Component } from 'react';
class Bloginfo extends Component {
  state = {
    
  }
  render() {
    return (
        <div className="headerDetail">
            <div className="headerAvatar">
              <img src={this.props.avatarLink} alt="avatar"/>
            </div>
            <div className="headerContent">
              {this.props.headerDescription}
            </div>
        </div>
    );
  }
}

export default Bloginfo;
