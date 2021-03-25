/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const characters = [
  {
    name: "Molecule Man",
    age: 29,
    secretIdentity: "Dan Jukes",
    powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
  },
  {
    name: "Madame Uppercut",
    age: 39,
    secretIdentity: "Jane Wilson",
    powers: ["Million tonne punch", "Damage resistance", "Superhuman reflexes"],
  },
  {
    name: "Eternal Flame",
    age: 1000000,
    secretIdentity: "Unknown",
    powers: [
      "Immortality",
      "Heat Immunity",
      "Inferno",
      "Teleportation",
      "Interdimensional travel",
    ],
  },
]

exports.createPages = async ({ actions: { createPage } }) => {
  characters.forEach(character => {
    createPage({
      path: `/characters/${character.name.toLowerCase().replace(" ", "-")}/`,
      component: require.resolve("./src/templates/characters.js"),
      context: { character },
    })
  })
}
