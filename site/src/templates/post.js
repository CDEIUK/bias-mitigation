import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

export default function Post({ data }) {
  const post = data.mdx
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p>Order {post.frontmatter.order}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
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
        order
      }
    }
  }
`
