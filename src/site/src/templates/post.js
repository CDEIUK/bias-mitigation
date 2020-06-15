import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Navigation from "../components/navigation"
import TOC from "../components/toc"

export default function Post({ data, pageContext }) {
  const post = data.mdx
  const { next, previous } = pageContext
  return (
    <Layout>
      <div style={{ display: "grid", gridTemplateColumns: "250px 1fr" }}>
        <div style={{ gridColumn: 1 }}>
          <TOC collection={post.fields.collection} />
        </div>
        {/* Need to set min width to avoid grid being expanded */}
        <div style={{ gridColumn: 2, minWidth: 0 }}>
          <h1>{post.frontmatter.title}</h1>
          <MDXRenderer>{post.body}</MDXRenderer>
          <Navigation next={next} previous={previous} />
        </div>
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
