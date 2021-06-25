/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div>
      <div className="row border-top border-bottom text-center">
        <div className="p-2 col"><a className="text-decoration-none text-dark" href="/">Home</a></div>
        <div className="p-2 col"><a className="text-decoration-none text-dark" href="/projects">Projects</a></div>
        <div className="p-2 col"><a className="text-decoration-none text-dark" href="/photography">Photos</a></div>
        <div className="p-2 col"><a className="text-decoration-none text-dark" href="/contact">Contact</a></div>
      </div>
      <br/>
      <div className="bio">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../images/profile-pic.png"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
        {author?.name && (
          <div>
            Written by <strong>{author.name}</strong>
            <br/>
            CEO of Talkframer LLC, Avid reader, Photographer
          </div>
        )}
      </div>
    </div>
  )
}

export default Bio
