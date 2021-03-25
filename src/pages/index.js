import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ location }) => {
  return (
    <Layout path={location.pathname}>
      <SEO title="Home" />
      <p>
        Hello, I’m <strong>Shu</strong>. I’m a software engineer and a
        translator (English/Japanese). You can contact me on{" "}
        <a href="https://twitter.com/chibicode">Twitter</a>.
      </p>
      <p>
        (This is a sample website - you’ll be building a site like this in{" "}
        <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
      <h2>Blog</h2>
      <div>
        <Link to="/blog-1/">
          When to Use Static Generation v.s. Server-side Rendering
        </Link>
        <p>January 2, 2020</p>
        <br />
        <Link to="/blog-2/">Two Forms of Pre-rendering</Link>
        <p>January 1, 2020</p>
      </div>
    </Layout>
  )
}

export default IndexPage
