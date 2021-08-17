import * as React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import PostHeader from "../components/post-header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = <Header />
  } else if (location.pathname == undefined) {
    header = <Header />
  } else {
    header = <PostHeader />
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      {header}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
