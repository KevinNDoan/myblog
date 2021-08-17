import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


const Footer = () => {
  return (
    <div>
      <div className="row border-top">
        <div className="p-2 col-2 pt-4">
          <StaticImage
            layout="fixed"
            formats={["AUTO", "WEBP", "AVIF", "PNG"]}
            src="../images/favicon-32x32.png"
            width={50}
            height={50}
            quality={95}
            alt="Logo"
          />
          <br />
          © {new Date().getFullYear()}
        </div>
        <div className="p-2 col pt-4">
          <div>To all readers, thank you.</div>
          <br />
          <div>
            This blog was handcrafted with code, coffee, and love. It launched at the beginning of 2021 from my bedroom, roughly six months after starting my company. The goal of <span style={{ fontStyle: "italic" }}>Choose to be Extraordinary</span> is to track my ideas, beliefs, and adventures for my retrospection in the future, and entertainment or education for you, the reader.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
