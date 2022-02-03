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
      caption: "My friend, Christian Wethington. Took this picture with intentionally incorrect settings to show him the wonders of modern photo editing software."
    },
    {
      src: ChristianWethington1,
      thumbnail: ChristianWethington1,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "At Bella Terra with Christian and found this fantastic 'OPEN' sign."
    },
    {
      src: Arik1,
      thumbnail: Arik1,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Nothing beats late night walks—especially with friends, especially with my camera."
    },
    {
      src: Arik0,
      thumbnail: Arik0,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "My friend, Arik Lieu, perched atop this tree trunk in city hall. I took this picture for his clothing brand, 'AURA BRAND CO.'"
    },
    {
      src: Aura0,
      thumbnail: Aura0,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "My friends, Arik Lieu and Anthony Vu, repping 'AURA BRAND CO.' merchandise as part of an unreleased media campaign."
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
      caption: "The ferris wheel stood as the single locus of solitude and tranquility. Atop it, partygoers departed the crazed mosh pit to share intimate moments. Snapped at Homecoming 2021."
    },
    {
      src: George,
      thumbnail: George,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Homecoming 2021 mosh pit. Snapped at Homecoming 2021."
    },
    {
      src: BlueGuy,
      thumbnail: BlueGuy,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Amidst the torrent, a saturnine soul. Snapped at Homecoming 2021."
    },
    {
      src: Homecoming0,
      thumbnail: Homecoming0,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Partygoers walk through a fenced off corridor onto the dance floor. Snapped at Homecoming 2021."
    },
    {
      src: JacobSpizzirri,
      thumbnail: JacobSpizzirri,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Had the great pleasure of seeing artist Jacob Spizzirri in action as part of my reporting for that year's issue of RED magazine."
    },
    {
      src: StateofCS1,
      thumbnail: StateofCS1,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Got to sit in on a Computer Science Club meeting. In the center is the president. To her right is Mr. Pham, the Computer Science Club advisor and my junior year computer science teacher, a jubilant figure that would entertain my burgeoning curiosity. I've yet to meet someone as passionate about computer science as he."
    },
    {
      src: StateofCS0,
      thumbnail: StateofCS0,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Computer science affects real change. I saw that up and close as Computer Science Club members watched a video for their upcoming robotics competition, their countenance clearly exposing their buzzing brains."
    },
    {
      src: SteveJobs0,
      thumbnail: SteveJobs0,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Gosh I loved this book. On the first day of school, I said that reading this book was the 'highlight of my summer,' and looking back, I still concur."
    },
    {
      src: Jacoby2,
      thumbnail: Jacoby2,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "As part of my reporting for RED magazine, I got to interview and photograph my friend, Jacoby Truong."
    },
    {
      src: Jacoby1,
      thumbnail: Jacoby1,
      thumbnailWidth: 212,
      thumbnailHeight: 154,
      caption: "Off the court, Jacoby Truong is a steadfast friend and great listener. I'm glad we met freshman year because he's been a constant shoulder to lean on throughout."
    },
    {
      src: Jacoby0,
      thumbnail: Jacoby0,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "My friend, Jacoby Truong, loves to get some time in on the court—and he doesn't go easy."
    },
    {
      src: Graduation2020Lloyd,
      thumbnail: Graduation2020Lloyd,
      thumbnailWidth: 400,
      thumbnailHeight: 225,
      caption: "Mr. Lloyd, my freshman year English teacher, brought light and life to the 2020 drive-thru graduation ceremony. One of my most gratifying moments as a student journalist was witnessing students' faces light up as they rode by him."
    },
    {
      src: Internship0,
      thumbnail: Internship0,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "As seen in a Baron News article on internships."
    },
    {
      src: Career0,
      thumbnail: Career0,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "As seen in a Baron News article on careers. I'll be the first to admit: this is not a great photo. COVID-19 challenged me creatively and boy did I struggle. Looking back, I'm able to cherish the simple luxury of being able to just go outside."
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