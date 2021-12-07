import * as React from "react"
import { Link, graphql } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

import { Container, Row, Col } from "react-bootstrap";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  let counter = 0

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <Container fluid>
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              counter += 1

              if(counter === 1) {
                return (
                    <div className="recent" key={post.fields.slug}>
                      <article className="post-list-item" itemScope itemType="http://schema.org/Article">
                        <header>
                          <p className="context"><span style={{fontWeight: "600"}}>{post.frontmatter.category}</span> | {post.frontmatter.date}</p>
                          <h1 className="recent-headline text-dark">
                            <Link to={post.fields.slug} itemProp="url">
                              <span itemProp="headline">{title}</span>
                            </Link>
                          </h1>
                        </header>
                        <section>
                          <p
                            className="description"
                            dangerouslySetInnerHTML={{
                              __html: post.frontmatter.description || post.excerpt,
                            }}
                            itemProp="description"
                          />
                          <br />
                          <img
                            className="thumbnail"
                            formats={["AUTO", "WEBP", "AVIF", "PNG", "JPEG", "JPG"]}
                            src={post.frontmatter.thumbnail}
                            alt="Thumbnail"
                          />
                        </section>
                      </article>
                    </div>
                )
              } else if(counter === 2 || counter === 3 || counter === 4 || counter === 5) {
                  return(
                    <div className="border-top" key={post.fields.slug}>
                      <article className="post-list-item" itemScope itemType="http://schema.org/Article">
                        <Row>
                          <Col>
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
                          </Col>
                          <Col>
                            <img className="thumbnail-sm" src={post.frontmatter.thumbnail} alt="Thumbnail" />
                          </Col>
                        </Row>
                      </article>
                    </div>
                  )
              }
            })}
      </Container>
    </Layout>
  )
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
          thumbnail
        }
      }
    }
  }
`
