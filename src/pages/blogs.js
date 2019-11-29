import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle} showBio>
        <SEO title="Blog" />
        <div>
          <ul>
            {posts.filter(item => item.node.fields.slug !== '/resume/').map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <li key={node.fields.slug}>
                  <Link style={{ boxShadow: `none`, fontSize:"21px", textDecoration:"none", fontStyle:"normal" }} to={node.fields.slug}>
                    {title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <ul>
            {posts.filter(item => item.node.fields.slug !== '/contact/').map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <li key={node.fields.slug}>
                  <Link style={{ boxShadow: `none`, fontSize:"21px", textDecoration:"none", fontStyle:"normal" }} to={node.fields.slug}>
                    {title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>        
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
