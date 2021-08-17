/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Link } from "gatsby"

const PostHeader = () => {
    return (
        <div className="bg-white" style={{top: "0", position: "sticky", zIndex: "1000"}}>
            <div className="d-flex justify-content-between">
                <b></b>
                <h1 className="post-heading text-center mt-2">
                    <Link to="/">Choose to be Extraordinary</Link>
                </h1>
                <p></p>
            </div>
            <hr />
        </div>
    )
}

export default PostHeader
