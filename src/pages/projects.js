import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectsIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={"Projects"} title={siteTitle}>
      <Seo title="Home" />
      <div>
        <div>
          <Card style={{ width: '100%' }}>
            <Card.Body>
              <div>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link href="https://www.talkframer.com" itemProp="url">
                        <span itemProp="headline">Talkframer</span>
                      </Link>
                    </h2>
                    <p>The privacy-centric tech company I started at the end of June 2020.</p>
                    <small></small>
                  </header>
                </article>
              </div>
            </Card.Body>
          </Card>
          <br />
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsIndex

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