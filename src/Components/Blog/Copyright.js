import React, { Component } from 'react';
import parse from 'html-react-parser';
class Copyright extends Component {
  state = {
    
  }
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div>@{this.props.year}, Built by {this.props.link}</div>
    );
  }
}

export default Copyright;
