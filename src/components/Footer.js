import * as React from "react"

const Footer = () => {
  return (
    <footer
      style={{
        marginTop: `2rem`,
        fontSize: 14,
        textAlign: "center",
      }}
    >
      © {new Date().getFullYear()}, Built with React and
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a> by{" "}
      <a href="https://teddy-beau.com">Teddy Beau</a>
    </footer>
  )
}
export default Footer
