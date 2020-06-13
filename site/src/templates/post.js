import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Navigation from "../components/navigation"

export default function Post({ data }) {
  const post = data.mdx
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
        <Navigation
          nextLabel={post.frontmatter.nextLabel}
          next={`/${post.fields.collection}/${post.frontmatter.next}`}
          previousLabel={post.frontmatter.previousLabel}
          previous={`/${post.fields.collection}/${post.frontmatter.previous}/`}
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
