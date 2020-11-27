import React, { Component } from 'react';
class Social extends Component {
  state = {
    social: this.props.social,
    newsDisplay: "",
    childshow: this.props.childshow,
    hoverSocial: 100
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  mouseEnter(i){
    this.setState({hoverSocial: i});
  };
  render() {
    var socials="";
    socials = this.state.social.map((social, i) => {
      var colorVal = this.getRandomInt(4);
      // Update blank page for social sites by Brett 2020/11/28
      return <a href={social.url} key={i} target={social.name!='blog'?"_blank":""} className={this.state.hoverSocial} style={{color: this.props.colors[colorVal]}} onMouseEnter={() => this.mouseEnter(i)}>{social.name}</a>
    });
    return (
      <div className="links">
         {socials}
      </div>
    );
  }
}

export default Social;
