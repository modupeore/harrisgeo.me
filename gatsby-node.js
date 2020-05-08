const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("src/templates/post.tsx")

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___id], order: DESC }) {
        edges {
          node {
            frontmatter {
              id
              path
              title
              description
              date
            }
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })
}
