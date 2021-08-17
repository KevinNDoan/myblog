import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const WhitepapersIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={"Whitepapers"} title={siteTitle}>
      <Seo title="Home" />
      <div>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          if (post.frontmatter.category === "Whitepapers") {
            return (
              <div>
                <Card style={{ width: '100%' }}>
                  <Card.Body>
                    <div key={post.fields.slug}>
                      <article
                        className="post-list-item"
                        itemScope
                        itemType="http://schema.org/Article"
                      >
                        <header>
                          <h2>
                            <Link to={post.fields.slug} itemProp="url">
                              <span itemProp="headline">{title}</span>
                            </Link>
                          </h2>
                          <p>{post.frontmatter.category}</p>
                          <small>{post.frontmatter.date}</small>
                        </header>
                        <section>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: post.frontmatter.description || post.excerpt,
                            }}
                            itemProp="description"
                          />
                        </section>
                      </article>
                    </div>
                  </Card.Body>
                </Card>
                <br />
              </div>
            )
          }
        })}
      </div>
    </Layout>
  )
}

export default WhitepapersIndex

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
