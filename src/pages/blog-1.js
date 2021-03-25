import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkBackHome from "../components/LinkBackHome"

const BlogOne = ({ location }) => {
  return (
    <Layout path={location.pathname}>
      <SEO title="When to Use Static Generation v.s. Server-side Rendering" />
      <h1>When to Use Static Generation v.s. Server-side Rendering</h1>
      <p className="date">January 2, 2020</p>
      <p>
        We recommend using Static Generation (with and without data) whenever
        possible because your page can be built once and served by CDN, which
        makes it much faster than having a server render the page on every
        request.
      </p>
      <p>
        We recommend using Static Generation (with and without data) whenever
        possible because your page can be built once and served by CDN, which
        makes it much faster than having a server render the page on every
        request.
      </p>
      <ul>
        <li>Marketing pages</li>
        <li>Blog posts</li>
        <li>E-commerce product listings</li>
        <li>Help and documentation</li>
      </ul>
      <p>
        You should ask yourself: "Can I pre-render this page ahead of a user's
        request?" If the answer is yes, then you should choose Static
        Generation.
      </p>
      <p>
        On the other hand, Static Generation is not a good idea if you cannot
        pre-render a page ahead of a user's request. Maybe your page shows
        frequently updated data, and the page content changes on every request.
      </p>
      <p>
        In that case, you can use Server-Side Rendering. It will be slower, but
        the pre-rendered page will always be up-to-date. Or you can skip
        pre-rendering and use client-side JavaScript to populate data.
      </p>
      <LinkBackHome />
    </Layout>
  )
}

export default BlogOne
