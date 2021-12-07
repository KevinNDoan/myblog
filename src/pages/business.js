import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const BusinessIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  let counter = 1

  return (
    <Layout location={"Business"} title={siteTitle}>
      <Seo title="Home" />
      <div>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          counter += 1

          if (post.frontmatter.category == "Business") {
            if(counter == 1) {
              return(
                <div key={post.fields.slug}>
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
            } else {
              return (
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
          }
        })}
      </div>
    </Layout>
  )
}

export default BusinessIndex

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
