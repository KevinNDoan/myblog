import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


const BooksIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={"Books"} title={siteTitle}>
      <Seo title="Home" />
      <h1>Current Reading List</h1>
      <hr />
      <ul>
        <li>Why We Sleep</li>
        <li>A Promised Land</li>
        <li>Leonardo da Vinci</li>
        <li>Homegoing</li>
        <li>48 Laws of Power</li>
      </ul>
      <br />
      <h1>Book related articles</h1>
      <hr />
      <div>
        {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            if (post.frontmatter.category === "Books") {
                return (
                  <div key={post.fields.slug}>
                      <article className="post-list-item" itemScope itemType="http://schema.org/Article">
                          <header>
                              <p className="context"><span style={{fontWeight: "600"}}>{post.frontmatter.category}</span> | {post.frontmatter.date}</p>
                              <h2 className="text-dark">
                              <Link to={post.fields.slug} itemProp="url">
                                  <span itemProp="headline">{title}</span>
                              </Link>
                              </h2>
                          </header>
                          <section>
                              <p
                              className="description"
                              dangerouslySetInnerHTML={{
                                  __html: post.frontmatter.description || post.excerpt,
                              }}
                              itemProp="description"
                              />
                          </section>
                      </article>
                  </div>
                )
            }
        })}
      </div>
    </Layout>
  )
}

export default BooksIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
        }
      }
    }
  }
`
