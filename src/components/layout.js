/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import "@fontsource/open-sans" // Defaults to weight 400 with all styles included.
import "@fontsource/open-sans/800.css"
import "@fontsource/open-sans/700.css"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children, path }) => {
  // console.log("layout", path)
  return (
    <>
      <Header path={path} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
