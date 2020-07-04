const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const blogsTemplate = path.resolve("src/components/BlogPost/BlogPost.tsx")
  const tagsTemplate = path.resolve("src/components/Tags/Tags.tsx")

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
              tags
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    // Array.flat not supported, add it
    Object.defineProperty(Array.prototype, "flat", {
      value: function (depth = 1) {
        return this.reduce(function (flat, toFlatten) {
          return flat.concat(
            Array.isArray(toFlatten) && depth > 1
              ? toFlatten.flat(depth - 1)
              : toFlatten
          )
        }, [])
      },
    })

    // all tags
    let allTags = res.data.allMarkdownRemark.edges.map(
      ({ node }) => node.frontmatter.tags
    )

    // all tags flattened
    allTags = allTags.flat()

    // take unique values only
    const tags = allTags.filter((a, b) => allTags.indexOf(a) === b)

    tags.map(tag => {
      createPage({
        path: `/tags/${tag}`,
        component: tagsTemplate,
      })
    })

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogsTemplate,
      })
    })
  })
}
