import * as React from "react"
import { graphql } from "gatsby"
import Gallery from 'react-grid-gallery';

import George from '../photography/IMG_9425_edited.jpg';
import FerrisWheel from '../photography/IMG_9032_edited.jpg';
import BlueGuy from '../photography/IMG_9285_edited.jpg';
import EnvironmentalImpactofCrypto from '../photography/environmental_impact_of_cryptocurrency.jpg';
import ChristianWethington0 from '../photography/christian_edited.jpg';
import JacobSpizzirri from '../photography/jacobSpizzirri2.jpg';
import Graduation2020Lloyd from '../photography/IMG_5399.jpg';
import Jacoby0 from '../photography/jacobyTruong.jpg';
import Jacoby1 from '../photography/jacobyTruong3-2.jpg';
import Jacoby2 from '../photography/jacobyTruong4.jpg';
import Substitute0 from '../photography/substitute_teachers_1.jpg';
import Substitute1 from '../photography/substitute_teachers_2.jpg';
import StateofCS0 from '../photography/the_state_of_cs_1.jpg';
import StateofCS1 from '../photography/the_state_of_cs_2.jpg';
import Career0 from '../photography/careerArticle.jpg';
import SteveJobs0 from '../photography/steve_jobs.jpg';
import Internship0 from '../photography/internshipArticle.jpg';
import Arik0 from '../photography/arik_1.jpg';
import Arik1 from '../photography/arik_2.jpg';
import Aura0 from '../photography/aura_1.jpg';
import ChristianWethington1 from '../photography/christian_1.jpg'
import Homecoming0 from '../photography/homecoming_1.jpg'


import Layout from "../components/layout"
import Seo from "../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';


const PhotographyIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`


  const IMAGES = [
    {
      src: ChristianWethington0,
      thumbnail: ChristianWethington0,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "My best friend, Christian Wethington. Took this picture with intentionally incorrect settings to show him the wonders of modern photo editing software."
    },
    {
      src: ChristianWethington1,
      thumbnail: ChristianWethington1,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "My best friend, Christian Wethington. Took this picture with intentionally incorrect settings to show him the wonders of modern photo editing software."
    },
    {
      src: Arik1,
      thumbnail: Arik1,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "My best friend, Christian Wethington. Took this picture with intentionally incorrect settings to show him the wonders of modern photo editing software."
    },
    {
      src: Arik0,
      thumbnail: Arik0,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "My best friend, Christian Wethington. Took this picture with intentionally incorrect settings to show him the wonders of modern photo editing software."
    },
    {
      src: Aura0,
      thumbnail: Aura0,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "My best friend, Christian Wethington. Took this picture with intentionally incorrect settings to show him the wonders of modern photo editing software."
    },
    {
      src: EnvironmentalImpactofCrypto,
      thumbnail: EnvironmentalImpactofCrypto,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "As featured in the December 2021 issue of Baron Banner."
    },
    {
      src: Substitute1,
      thumbnail: Substitute1,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "As featured in the December 2021 issue of Baron Banner."
    },
    {
      src: Substitute0,
      thumbnail: Substitute0,
      thumbnailWidth: 320,
      thumbnailHeight: 252,
      caption: "As featured in the December 2021 issue of Baron Banner."
    },
    {
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
    },
    {
      src: BlueGuy,
      thumbnail: BlueGuy,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Amidst the torrent, a saturnine soul."
    },
    {
      src: Homecoming0,
      thumbnail: Homecoming0,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Amidst the torrent, a saturnine soul."
    },
    {
      src: JacobSpizzirri,
      thumbnail: JacobSpizzirri,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "My best friend, Christian Wethington. Took this picture with intentionally incorrect settings to show him the wonders of modern photo editing software."
    },
    {
      src: StateofCS1,
      thumbnail: StateofCS1,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "My best friend, Christian Wethington. Took this picture with intentionally incorrect settings to show him the wonders of modern photo editing software."
    },
    {
      src: StateofCS0,
      thumbnail: StateofCS0,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "My best friend, Christian Wethington. Took this picture with intentionally incorrect settings to show him the wonders of modern photo editing software."
    },
    {
      src: SteveJobs0,
      thumbnail: SteveJobs0,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "My best friend, Christian Wethington. Took this picture with intentionally incorrect settings to show him the wonders of modern photo editing software."
    },
    {
      src: Jacoby2,
      thumbnail: Jacoby2,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "My best friend, Christian Wethington. Took this picture with intentionally incorrect settings to show him the wonders of modern photo editing software."
    },
    {
      src: Jacoby1,
      thumbnail: Jacoby1,
      thumbnailWidth: 212,
      thumbnailHeight: 154,
      caption: "My best friend, Christian Wethington. Took this picture with intentionally incorrect settings to show him the wonders of modern photo editing software."
    },
    {
      src: Jacoby0,
      thumbnail: Jacoby0,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "My best friend, Christian Wethington. Took this picture with intentionally incorrect settings to show him the wonders of modern photo editing software."
    },
    {
      src: Graduation2020Lloyd,
      thumbnail: Graduation2020Lloyd,
      thumbnailWidth: 400,
      thumbnailHeight: 225,
      caption: "My best friend, Christian Wethington. Took this picture with intentionally incorrect settings to show him the wonders of modern photo editing software."
    },
    {
      src: Internship0,
      thumbnail: Internship0,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "My best friend, Christian Wethington. Took this picture with intentionally incorrect settings to show him the wonders of modern photo editing software."
    },
    {
      src: Career0,
      thumbnail: Career0,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "My best friend, Christian Wethington. Took this picture with intentionally incorrect settings to show him the wonders of modern photo editing software."
    },
  ]

  return (
    <Layout location={"Photography"} title={siteTitle}>
      <Seo title="Photography" />
      <div>
        <h3>Welcome!</h3>
        <p>My photography journey thus far...</p>
      </div>
      <br />
      <div className="w-100 h-100 mb-4 position-relative d-grid"><Gallery images={IMAGES} backdropClosesModal={true} /></div>
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