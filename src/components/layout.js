import React from "react"
import { Link } from "gatsby"
import Bio from "./bio"


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
          <h1>Hey, I'm Neha <span role="img" aria-label="wave">👋</span></h1>
          <p>Happily graduating with a Master's in Computer Science <span role="img" aria-label="woman student">👩‍🎓</span></strong> from Old Dominion University in December 2019. 
          The past two years have been an amazing journey as a student, as a researcher, and a computer science instructor.</p>

          <p>I have lived a full and enriching life as a graduate student, being an active member of student body organizations, participating in hackathons, conferences, workshops, and volunteering whenever possible.</p>

          <p>Inspired by the movie 'Pay it Forward" thought of sharing the resources that have helped me along my journey, I started writing my blog. You are welcome to read along as I jot down a few pointers, but if you want to talk about the House of The Dragon <span role="img" aria-label="dragon">🐉</span>, I’m totally fine with that too.</p>

          <p>Apart from programming, I love to travel <span role="img" aria-label="travel">🛫</span>and I aim to visit one new place each year. 
          I enjoy photography and watching movies, you can expect to see a few pet topics creep into what is essentially 
          an introduction to all things Neha. Thank you for coming on board.</p>

          <nav className="main-nav">
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/resume/"}>Resume</Link>
            <Link to={"/contact/"}>Contact</Link>
          </nav>
        </div>
      )
    } else if (post !== undefined) {
      // When its a blog details page
      header = (
        <div style={{paddingBottom: `0.5rem`}}>
          <nav
            className="font-sans"
            style={{
              paddingBottom: "0.5rem"
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
              paddingBottom: "1.2 rem"
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
            background: `rgb(251,245,256)`,
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
