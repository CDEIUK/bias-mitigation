const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    // add url slug to fields
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    // add collection (i.e. finance / recruiting) to fields
    createNodeField({
      node,
      name: `collection`,
      value: getNode(node.parent).relativeDirectory,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              collection
              slug
            }
            frontmatter {
              order
              title
            }
          }
        }
      }
    }
  `)

  const filterBy = collection => post =>
    post.node.fields.collection === collection
  const sortByOrder = (post1, post2) =>
    post1.node.frontmatter.order - post2.node.frontmatter.order
  const financePosts = result.data.allMdx.edges
    .filter(filterBy("finance"))
    .sort(sortByOrder)
  const recruitingPosts = result.data.allMdx.edges
    .filter(filterBy("recruiting"))
    .sort(sortByOrder)

  financePosts.forEach(({ node }, index) => {
    const previous = index === 0 ? null : financePosts[index - 1].node
    const next =
      index === financePosts.length - 1 ? null : financePosts[index + 1].node

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        next,
        previous,
      },
    })
  })

  recruitingPosts.forEach(({ node }, index) => {
    const previous = index === 0 ? null : recruitingPosts[index - 1].node
    const next =
      index === recruitingPosts.length - 1 ? null : recruitingPosts[index + 1].node

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
        next,
        previous,
      },
    })
  })
}
