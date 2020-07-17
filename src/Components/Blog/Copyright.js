import React, { Component } from 'react';
class Copyright extends Component {
  state = {
    
  }
  render() {
    return (
        <div>@{this.props.year}, Built by {this.props.link}</div>
    );
  }
}

export default Copyright;
