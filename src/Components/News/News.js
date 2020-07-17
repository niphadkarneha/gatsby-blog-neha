import React, { Component } from 'react';
import Social from '../Home/Social';
class News extends Component {
 getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
  changeColor = () => {
    var links = document.querySelectorAll("a");
    for (const [index, link] of links.entries()) {
       if(link){
          var colorVal = this.getRandomInt(4);
          link.style.color = this.props.colors[colorVal];
       }
    }
 }
  render() {
    this.changeColor();  
    return (
      <div style={{color: this.props.appClr}}>
        <div className="header-section">
          <div className="header-frame">
            <h1>rendezvous with cassidoo</h1>
            <h2>a tech newsletter for you</h2>
          </div>
        </div>
        <div className="newsletter-blurb">
          In this <span>weekly newsletter</span> I'm going to share with you
          what's <span className="blue">new and cool</span> in the world of web
          development, with content for <span>everyone</span>, from beginners to
          pros. <br />
          There's also an
          <span className="green">interview question of the week</span>, where you can
          test your skills and I'll share the results the following week.
          <br />
          I'll also send you <span>jokes</span> and
          <span className="yellow">stories</span>.
          <br />
          And pics of <span className="blue">mechanical keyboards</span>.
          <br />
          I won't spam though, <span className="green">I promise</span>. <br />
          You can also <a href="https://buttondown.email/cassidoo/archive">view previous issues</a>, and <a href="https://buttondown.email/cassidoo/rss" >subscribe via RSS</a>!
        </div>
        <div className="sneaky-sponsor">
          Want to sponsor this newsletter? 
          <a href="mailto:cassidy@cassidoo.co" style={{marginLeft: 10}}>Drop me a line</a>!
        </div>
        <Social social={this.props.social} colors={this.props.colors}/>
        <div className="go-home">
          <a href="/">go to nehapersonal.co</a>
        </div>
      </div>
    );
  }
}

export default News;
