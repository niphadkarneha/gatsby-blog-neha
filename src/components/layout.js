import React from "react"
import { Link } from "gatsby"
import Bio from "./bio"
import { rhythm, scale } from "../utils/typography"

import "./layout.css"

class Layout extends React.Component {
  render() {
    const { location, title, children, post, showBio } = this.props

    const rootPath = `${__PATH_PREFIX__}/`
    let header

    let hasContent = true
    if (location.pathname === rootPath) {
      // When its home page
      hasContent = false
      header = (
        <div className="homePageHeader">
          <h1>Hey, I'm Neha.</h1>
          <p>I’m a student at Old Dominion University in Norfolk, Virginia where I’m working on finishing a master’s degree in Computer Science. Just to keep impossibly busy, I’m also a Research and Teaching Assistant in my department.</p>
          <p>When summer rolled along, I thought I’d try something new by building a React site to share the things I’ve learned on my journey to becoming a programmer.</p>
          <p>And this is it. </p>
          <p>Thanks for coming on board. As an inveterate wanderer, amateur photographer, and hopeless movie buff, you can expect to see a few pet topics creep into what is essentially an introduction to all things Neha.</p>
          <p>You’re welcome to just read along as I jot down a few pointers for fellow tech-travelers, but if you want to talk about the last season of GoT, I’m totally fine with that too. Welcome!</p>
          <nav className="main-nav">
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/resume/"}>Resume</Link>
            <a href="https://www.linkedin.com/in/niphad/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/niphadkarneha" target="_blank" rel="noopener noreferrer">Twitter</a>
          </nav>
        </div>
      )
    } else if (post !== undefined) {
      // When its a blog details page
      header = (
        <div style={{paddingBottom: `1rem`}}>
          <nav
            className="font-sans"
            style={{
              paddingBottom: "1rem"
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: "rgb(48, 54, 67)",
                fontWeight: "normal",
                fontStyle: "normal"
              }}
              to={`/`}
            >
              ← Back to Home
            </Link>
            </nav>
          <nav
            className="font-sans"
            style={{
              paddingBottom: "1rem"
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: "rgb(48, 54, 67)",
                fontWeight: "normal",
                fontStyle: "normal"
              }}
              to={`/blogs`}
            >
              ← Read more, Go back to the Blogs page
            </Link>
            </nav>
          <p style={{
            color: "rgb(89, 92, 98)",
            fontSize: "0.5 rem"
          }}>{post.frontmatter.date}</p>
          <h1 style={{ marginTop: 0 }}>{post.frontmatter.title}</h1>
        </div>
      )
    } else {
      // any other pages
      header = (
        <div style={{paddingBottom: `0rem`}}>
          <nav
            className="font-sans"
            style={{
              paddingBottom: "2rem"
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: "rgb(48, 54, 67)",
                fontWeight: "normal",
                fontStyle: "normal"
              }}
              to={`/`}
            >
              ← Back to Home
            </Link>
          </nav>
          <h1 style={{ marginTop: 0 }}>{title}</h1>

          {showBio && <Bio />}
          {!showBio && <div style={{ marginBottom: "1rem", display: "block", height: '1px'}}></div>}
        </div>
      )
    }
    return (
      <React.Fragment>
        <header
          style={{
            background: `rgb(235, 237, 242)`,
            paddingTop: `1rem`
          }}
        >
          <div className="headerWrapper">
            {header}
          </div>
        </header>
        {hasContent && <main>{children}</main>}
        <footer>
          © {new Date().getFullYear()}, Neha Niphadkar. All right reserved.
        </footer>
      </React.Fragment>
    )
  }
}

export default Layout
