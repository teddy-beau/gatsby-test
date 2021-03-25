import React from "react"
import Layout from "../components/layout"
import LinkBackHome from "../components/LinkBackHome"
import SEO from "../components/seo"

const Characters = ({ pageContext: { character }, location }) => {
  return (
    <Layout path={location.pathname}>
      <SEO title={character.name} />
      <h1>{character.name}</h1>
      <p className="date">Age: {character.age}</p>
      <h2>Secret identity: {character.secretIdentity}</h2>
      <p>Powers:</p>
      <ul>
        {character.powers.map(elem => {
          return <li>{elem}</li>
        })}
      </ul>
      <LinkBackHome />
    </Layout>
  )
}

export default Characters
