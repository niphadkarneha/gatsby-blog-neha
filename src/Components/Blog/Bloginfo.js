import React, { Component } from 'react';
import parse from 'html-react-parser';
class Bloginfo extends Component {
  state = {
    
  }
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div className="headerDetail">
            <div className="headerAvatar">
              <img src={this.props.avatarLink}/>
            </div>
            <div className="headerContent">
              {this.props.headerDescription}
            </div>
        </div>
    );
  }
}

export default Bloginfo;
