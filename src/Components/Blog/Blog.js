import React, { Component } from 'react';
import parse from 'html-react-parser';
import Bloginfo from './Bloginfo';
import Copyright from './Copyright';
class Blog extends Component {
  state = {
    header: this.props.blogData.header,
    articles: this.props.blogData.articles,
    copyright: this.props.blogData.copyright
  }

  render() {
    var avatarLink = "images/"+this.state.header.avatar;
    var headerDescription = parse(this.state.header.description);
    var articles = this.state.articles.map((article, i) => {
      return <article key={i}>
          <header>
            <h3>
              <a href={article.link}>{article.title}</a>
            </h3>
            <small>{article.date}</small>
          </header>
          <section>
            <p>{article.short}</p>
          </section>
        </article>
    });
    var copyLink = parse(this.state.copyright.copyLink);
    return (
      <div className="blog" style={{color: this.props.appClr}}>
        <header>
          <h1 className="headerTitle">{this.state.header.title}</h1>
          <Bloginfo avatarLink={avatarLink} headerDescription={headerDescription}/>
        </header>
        <main>
          {articles}
        </main>
        <footer>
          <Copyright year={this.state.copyright.year} link={copyLink}/>
        </footer>
      </div>
    );
  }
}

export default Blog;
