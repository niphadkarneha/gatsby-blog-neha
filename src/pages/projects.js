import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const projects = data.allProjectsJson.edges

    return (
      <Layout location={this.props.location} title="Projects">
        <SEO title={"Projects | " + siteTitle} />

        <div
          style={{
            display:"flex",
            flexFlow: "row wrap",
            justifyContent: "center"
          }}
        >
        {projects.map((item, i) => {
          return (
            <div
              key={"project_" + i}
              style={{
                flexGrow: "1",
                width: "33%"
              }}
            >
              <div
                style={{
                  padding: "10px"
                }}>
                <div
                  key={"project_" + i}
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <h2
                    style={{
                      padding: "10px",
                      margin: "0px",
                      fontSize: "1.2rem"
                    }}
                  >
                    {item.node.title}
                  </h2>
                  <p
                    style={{
                      padding: "10px",
                      fontSize: "1rem"
                    }}>{item.node.description}</p>
                  <div style={{
                    padding: "5px",
                    textAlign: "right"
                  }}>
                    <a
                      style={{
                        fontSize: ".8rem",
                        textDecoration: "none",
                        fontStyle: "normal"
                      }}
                      href={item.node.github}>Github</a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
        </div>
      </Layout>
    )
  }
}

export default Projects



export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allProjectsJson {
      edges {
        node {
          title
          description
          github
        }
      }
    }
  }
`
