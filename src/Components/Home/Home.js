import React, { Component } from 'react';
import parse from 'html-react-parser';
import Header from './Header';
import Social from './Social';
import About from './About';
import Copyright from '../Blog/Copyright';

class Home extends Component {
    constructor(props){
      super(props);
      this.state = {
        header: this.props.homeData.header,
        social: this.props.homeData.social,
        about: this.props.homeData.about,
        colors: this.props.homeData.colors,
        copyright: this.props.blogData.copyright
      };
    }
    
    render() {
      var copyLink = parse(this.state.copyright.copyLink);
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