import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

var formClasses = "visible";
var successMessageClasses = "invisible";

function handleForm() {
  formClasses.replace("visible", "invisible");
  successMessageClasses.replace("invisible", "visible");

  console.log(formClasses);
  console.log("hi");
}

const ContactIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={"contact"} title={siteTitle}>
      <Seo title="Home" />
      <Bio />
      <div>
          <h4>Contact form</h4>
          <div id="form" className={formClasses}>
            <label htmlFor="name">Name</label>
            <input className="form-control" name="name" type="text" placeholder="Name"/>
            <br/>
            <label htmlFor="contact">Email</label>
            <input className="form-control" type="text" placeholder="Email"/>
            <br/>
            <label htmlFor="content">Message</label>
            <textarea className="form-control" name="content" id="content" rows="10" style={{resize:"none"}}></textarea>
            <br/>
            <button className="btn btn-primary rounded-pill" type="submit" onClick={handleForm()} >Submit</button>
          </div>
          <div id="success-message" className={successMessageClasses}>
            Your contact form was submitted.
          </div>
          <br/>
          <h4>My emails</h4>
          <p>School Email: <a class="text-decoration-none" href="mailto:kndoan103@student.hbuhsd.edu">kndoan103@student.hbuhsd.edu</a></p>
          <p>Company Email: <a class="text-decoration-none" href="mailto:kevindoan@talkframer.com">kevindoan@talkframer.com</a></p>
      </div>
  </Layout>
  )
}

export default ContactIndex

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