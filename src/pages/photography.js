import * as React from "react"
import { graphql } from "gatsby"
import Gallery from 'react-grid-gallery';

import George from '../photography/IMG_9425_edited.jpg';
import FerrisWheel from '../photography/IMG_9032_edited.jpg';


import Layout from "../components/layout"
import Seo from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';


const PhotographyIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`


  const IMAGES = [{
      src: FerrisWheel,
      thumbnail: FerrisWheel,
      thumbnailWidth: 300,
      thumbnailHeight: 200,
      caption: "Homecoming 2021 ferris wheel."
  },
  {
      src: George,
      thumbnail: George,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Homecoming 2021 mosh pit."
  }]

  return (
    <Layout location={"Photography"} title={siteTitle}>
      <Seo title="Photography" />
      <div>
          <h4>Welcome!</h4>
          <p>This gallery is the culmination of my 5 year (and ongoing) photography journey.</p>
      </div>
      <br/>
      <div className="w-100 h-100 pb-5 mb-5"><Gallery images={IMAGES} backdropClosesModal={true}/></div>
      <br />
      <br />
      <br />
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