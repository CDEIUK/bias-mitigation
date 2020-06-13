import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Navigation from "../components/navigation"

export default function Post({ data }) {
  const post = data.mdx
  const { next, nextLabel, previous, previousLabel } = post.frontmatter
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
        <Navigation
          nextLabel={nextLabel}
          next={next && `/${post.fields.collection}/${next}`}
          previousLabel={previousLabel}
          previous={previous && `/${post.fields.collection}/${previous}/`}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        next
        nextLabel
        previous
        previousLabel
      }
      fields {
        collection
      }
    }
  }
`
