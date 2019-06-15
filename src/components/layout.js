import React from "react"
import { Link } from "gatsby"
import Bio from "./bio"
import { rhythm, scale } from "../utils/typography"

import "./layout.css"

class Layout extends React.Component {
  render() {
    const { location, title, children, post } = this.props

    const rootPath = `${__PATH_PREFIX__}/`
    let header

    let hasContent = true
    if (location.pathname === rootPath) {
      hasContent = false
      header = (
        <div className="homePageHeader">
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
                fontStyle: "normal"
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <p>Hey, I'm Neha.</p>
          <p>I'm a Winterfell-based Frontend Developer trying to stick people with the pointy end. I previously knew nothing but had the honor to meet Jaqen H'ghar.</p>
          <nav className="main-nav">
            <a href="https://www.linkedin.com/">LinkedIn</a>
            <Link to={"/resume/"}>Resume</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <a href="https://twitter.com/niphadkarneha">Twitter</a>
          </nav>
        </div>
      )
    } else if (post !== undefined) {
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
            fontSize: "1.25rem"
          }}>{post.frontmatter.date}</p>
          <h1 style={{ marginTop: 0 }}>{post.frontmatter.title}</h1>
        </div>
      )
    } else {
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

          <Bio/>
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
