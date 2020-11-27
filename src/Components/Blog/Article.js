import React, { Component } from 'react';
import parse from 'html-react-parser';
import Bloginfo from './Bloginfo';
import Copyright from './Copyright';
class Article extends Component {
  state = {
      articleNo: this.props.articleNo,
      articles: this.props.articles,
      copyright: this.props.copyright
  }

  render() {
    var article = this.state.articles[this.state.articleNo];
    var articleSection = parse(article.content);
    var avatarLink = "images/"+this.props.blogHeader.avatar;
    var headerDescription = parse(this.props.blogHeader.description);
    // pager
    var articleLastNo = this.state.articles.length - 1;
    var pagers = {
        prev: -100,
        next : -100
    };
    var pageLink = "", pageTitle="";
    if(this.state.articleNo < articleLastNo)
        pagers.next = this.state.articleNo + 1;
    var pagerRender = Object.entries(pagers).map(([key, value]) => {
        if(key === "prev"){
            if(this.state.articleNo > 0){
                pagers.prev = this.state.articleNo - 1;
                pageLink = "/" + this.state.articles[pagers.prev].link;
                pageTitle = this.state.articles[pagers.prev].title;
                return <li key={key}><a rel="prev" href={pageLink}>← {pageTitle}</a></li>
            }
            else{
                return <li></li>
            }
        }
        else{
            if(this.state.articleNo < articleLastNo){
                pagers.next = this.state.articleNo + 1;
                pageLink = "/" + this.state.articles[pagers.next].link;
                pageTitle = this.state.articles[pagers.next].title;
                return <li key={key}><a rel="next" href={pageLink}>{pageTitle} →</a></li>
            } 
        }
        return 0;
    });
    var copyLink = parse(this.state.copyright.copyLink);
    return (
        <div className="article" style={{color: this.props.appClr}}>
            {/* Add redirect link by Brett 2020/11/28 */}
            <a className="backLink" href="/blog">View all blogs</a>
            <header>
                <h3>
                    <a href="/blog">{this.props.blogHeader.title}</a>
                </h3>
            </header>
            <main>
                <article>
                    <header>
                        <h1>{article.title}</h1>
                        <p className="articleDate">{article.date}</p>
                    </header>
                    <section>
                        {articleSection}
                    </section>
                    <hr />
                    <Bloginfo avatarLink={avatarLink} headerDescription={headerDescription}/>
                </article>
                <nav>
                    <ul className="pagerUl">
                        {pagerRender}
                    </ul>
                </nav>
            </main>
            <footer>
                <Copyright year={this.state.copyright.year} link={copyLink}/>
            </footer>
        </div>
    );
  }
}

export default Article;
