import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import News from './Components/News/News';
import Blog from './Components/Blog/Blog';
import Article from './Components/Blog/Article';
import {resumeData} from './resumeData';
import Switch2 from 'react-input-switch';
import Copyright from './Components/Blog/Copyright';
import parse from 'html-react-parser';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      homeData: resumeData.home,
      switchChecked: false,
      appClr: "white",
      appBackClr: "black",
      counter: 0,
      switchValue2: false,
      articles: resumeData.blog.articles,
      copyright: resumeData.blog.copyright
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        ...this.state,
        counter: this.state.counter === 10 ? 0 : this.state.counter + 1,
      })
    }, 3000)
  }
  handleChange = (switchChecked) =>{
    this.setState({
      switchChecked,
      appClr: switchChecked?"black":"white",
      appBackClr: switchChecked?"white":"black"
    });
  }
  setValue = () => {
    var prevVal = this.state.switchValue2;
    this.setState({
      switchValue2: prevVal?false:true,
      appClr: prevVal?"white":"black",
      appBackClr: prevVal?"black":"white"
    });
  }
  render() {
    var articleRoutes = this.state.articles.map((article, i) => {
      var articleLink = "/" + article.link;
      return <Route key={i} exact path={articleLink}>
              <Article articleNo={i} articles={this.state.articles} blogHeader={resumeData.blog.header} copyright={resumeData.blog.copyright} appClr={this.state.appClr}/>
            </Route>
    });
    var copyLink = parse(this.state.copyright.copyLink);
    return (
      <Router>
      <div className="App" style={{backgroundColor: this.state.appBackClr}}>
      <div className="switch-color">
      <Switch2
          styles={{
            track: {
              backgroundColor: 'green',
            },
            trackChecked: {
              backgroundColor: '#000'
            },
            button: {
              backgroundColor: '#96979c'
            },
            buttonChecked: {
              backgroundColor: '#000',
              left: '37px'
            }
          }}
          class="123" id="456" on={true} off={false} value={this.state.switchValue2} onChange={this.setValue}
        />
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home homeData={this.state.homeData} blogData={resumeData.blog} appClr={this.state.appClr} counter={this.state.counter}/>
            </Route>
            <Route exact path="/newsletter">
              <News social={this.state.homeData.social} appClr={this.state.appClr} colors={this.state.homeData.colors}/>
            </Route>
            <Route path="/blog">
              <Blog blogData={resumeData.blog} appClr={this.state.appClr}/>
            </Route>
            {articleRoutes}
          </Switch>
          {/* Add footer */}
          <footer>
            <Copyright year={this.state.copyright.year} link={copyLink} appClr={this.state.appClr}/>
          </footer>
        </div>

      </div>
    </Router>
    );
  }
}

export default App;
