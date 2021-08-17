import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';

import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'


const PhotographyIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={"Photography"} title={siteTitle}>
        <Seo title="Home" />
        <div>
            <h4>Welcome!</h4>
            <p>This gallery is the culmination of my five year (and ongoing) photography journey.</p>
        </div>
        <br/>
        <div>
            * Check back in later. The content for this page is coming soon! *
            <Gallery>
                {/* <Item
                original="../../src/static/45fc73bafa7d37c9606611076df1687d/ee81f/profile-pic.avif"
                thumbnail="https://placekitten.com/80/60?image=1"
                width="1024"
                height="768"
                >
                {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=1" />
                )}
                </Item>
                <Item
                original="https://placekitten.com/1024/768?image=2"
                thumbnail="https://placekitten.com/80/60?image=2"
                width="1024"
                height="768"
                >
                {({ ref, open }) => (
                    <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=2" />
                )}
                </Item> */}
            </Gallery>
        </div>
        <br/>
        <div></div>
  </Layout>
  )
}

export default PhotographyIndex

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