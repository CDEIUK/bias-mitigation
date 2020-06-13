import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Navigation from "../components/navigation"

export default function Post({ data, pageContext }) {
  const post = data.mdx
  const { next, previous } = pageContext
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <MDXRenderer>{post.body}</MDXRenderer>
        <Navigation next={next} previous={previous} />
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
      }
      fields {
        collection
      }
    }
  }
`
