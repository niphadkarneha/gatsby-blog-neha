import React, { Component } from 'react';
class Copyright extends Component {
  state = {
    
  }
  render() {
    return (
        // Update copyright by Brett 2020/11/28
        <div>@{this.props.year}, Built by {this.props.link} and I'd like to give credit to <a href='https://cassidoo.co'>Cassidy Williams</a> for the design</div>
    );
  }
}

export default Copyright;
