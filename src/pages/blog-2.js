import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkBackHome from "../components/LinkBackHome"

const BlogTwo = ({ location }) => (
  <Layout path={location.pathname}>
    <SEO title="Two Forms of Pre-rendering" />
    <h1>Two Forms of Pre-rendering</h1>
    <p className="date">January 1, 2020</p>
    <p>
      Next.js has two forms of pre-rendering: Static Generation and Server-side
      Rendering. The difference is in when it generates the HTML for a page.
    </p>

    <ul>
      <li>
        Static Generation is the pre-rendering method that generates the HTML at
        build time. The pre-rendered HTML is then reused on each request.
      </li>
      <li>
        Server-side Rendering is the pre-rendering method that generates the
        HTML on each request.
      </li>
    </ul>
    <p>
      Importantly, Next.js lets you choose which pre-rendering form to use for
      each page. You can create a "hybrid" Next.js app by using Static
      Generation for most pages and using Server-side Rendering for others.
    </p>
    <LinkBackHome />
  </Layout>
)

export default BlogTwo
