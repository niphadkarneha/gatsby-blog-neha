import React, { Component } from 'react';
import Header from './Header';
import Social from './Social';
import About from './About';
class Home extends Component {
    constructor(props){
      super(props);
      this.state = {
        header: this.props.homeData.header,
        social: this.props.homeData.social,
        about: this.props.homeData.about,
        colors: this.props.homeData.colors
      };
    }
    render() {
      return (
        <div className="Home">
          <Header data={this.state.header} appClr={this.props.appClr}/>
          <Social social={this.state.social} showNews={this.props.showNews} colors={this.state.colors}/>
          <About about={this.state.about} appClr={this.props.appClr} colors={this.state.colors}/>
        </div>
      );
    }
  }
  
  export default Home;