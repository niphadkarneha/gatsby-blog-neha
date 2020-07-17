import React from 'react';
import parse from 'html-react-parser';

class About extends React.Component {
   state = {
      about: this.props.about,
      colorToggleVal: this.getRandomInt(4)
   }
   handleClick(i) {
      const newAbout = this.state.about.slice() //copy the array
      newAbout.forEach(element => {
         element.class = "";
      });
      newAbout[i].class = 'show'; //execute the manipulations
      this.setState({about: newAbout, colorToggleVal: this.getRandomInt(4)});
  }
  
  onMouseEnter = e => {
   this.setState({colorToggleVal: this.getRandomInt(4)});
     console.log("mousehover");
 };
  getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
   }
   changeColor = () => {
      var links = document.querySelectorAll("a");
      for (const [index, link] of links.entries()) {
      // for (const [index, link] of links.entries()) {
         if(link){
            var colorVal = this.getRandomInt(4);
            link.style.color = this.props.colors[colorVal];
         }
      }
   }
   // hover event
   
   render() {
      // change color every 4s
      this.changeColor();
      var toggler = this.state.about.map((about, i)=>{
         if(about.class === "show"){
            var activeToggleColor = this.props.colors[this.state.colorToggleVal];
            return <button id={about.title} className={about.class} key={i} style={{color: activeToggleColor, borderColor: activeToggleColor}} onClick={() => this.handleClick(i)}>{about.title}</button>
         }
         return <button id={about.title} className={about.class} key={i} onClick={() => this.handleClick(i)}>{about.title}</button>
      });
      var content = this.state.about.map(function(about, i){
         var aboutClass = "bio " + about.class;
         var aboutContent = parse(about.content)
         return <div className={aboutClass} key={i}>{aboutContent}</div>
      });
      return (
         <div className="bio-switcher">
            <div className="toggler">
               {toggler}           
            </div>
            <div className="resume-content" id="resume-content" style={{color: this.props.appClr}}>
               {content}
            </div>
         </div>
      );
   }
}

export default About;
