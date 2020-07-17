import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import News from './Components/News/News';
import Blog from './Components/Blog/Blog';
import Article from './Components/Blog/Article';
import {resumeData} from './resumeData';
import Switch2 from 'react-input-switch';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      homeData: resumeData.home,
      switchChecked: false,
      appClr: "black",
      appBackClr: "white",
      counter: 0,
      switchValue2: false,
      articles: resumeData.blog.articles
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
      appClr: switchChecked?"white":"black",
      appBackClr: switchChecked?"black":"white"
    });
  }
  setValue = () => {
    var prevVal = this.state.switchValue2;
    this.setState({
      switchValue2: prevVal?false:true,
      appClr: prevVal?"black":"white",
      appBackClr: prevVal?"white":"black"
    });
  }
  render() {
    var articleRoutes = this.state.articles.map((article, i) => {
      var articleLink = "/" + article.link;
      return <Route key={i} exact path={articleLink}>
              <Article articleNo={i} articles={this.state.articles} blogHeader={resumeData.blog.header} copyright={resumeData.blog.copyright} appClr={this.state.appClr}/>
            </Route>
    });
    return (
      <Router>
      <div className="App" style={{backgroundColor: this.state.appBackClr}}>
      <Switch2
          styles={{
            track: {
              backgroundColor: 'white'
            },
            trackChecked: {
              backgroundColor: '#000'
            },
            button: {
              backgroundColor: '#96979c'
            },
            buttonChecked: {
              backgroundColor: '#000'
            }
          }}
          on={true} off={false} value={this.state.switchValue2} onChange={this.setValue}
        />
        <div className="container">
        <Switch>
          <Route exact path="/">
            <Home homeData={this.state.homeData} appClr={this.state.appClr} counter={this.state.counter}/>
          </Route>
          <Route exact path="/newsletter">
            <News social={this.state.homeData.social} appClr={this.state.appClr} colors={this.state.homeData.colors}/>
          </Route>
          <Route path="/blog">
            <Blog blogData={resumeData.blog} appClr={this.state.appClr}/>
          </Route>
          {articleRoutes}
        </Switch>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
