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
          <p>I'm a student at Old Dominion University and I'm currently finishing up a Master's degree in Computer Science. Apart from being a full time student, I'm also a Research and Teaching Assistant for the Department of Computer Science.</p>
          <p>Outside of the world of computers, I am a traveller. I was born with wanderlust, I get that from my parents.  
      I'm also an amateur photographer and a complete movie buff. I am a GoT fan (irrespective of the last season).</p>
          <nav className="main-nav">
            <a href="https://www.linkedin.com/in/niphad/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <Link to={"/resume/"}>Resume</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/projects"}>Projects</Link>
            <a href="https://twitter.com/niphadkarneha" target="_blank" rel="noopener noreferrer">Twitter</a>
          </nav>
        </div>
      )
    } else if (post !== undefined) {
      // When its a blog details page
      header = (
        <div style={{paddingBottom: `4rem`}}>
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
