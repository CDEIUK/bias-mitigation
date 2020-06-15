import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import style from "./toc.module.css"

const TOC = props => {
  const {
    allMdx: { edges: posts },
  } = useStaticQuery(graphql`
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

  const filteredPosts = posts
    .filter(p => p.node.fields.collection === props.collection)
    .sort((p1, p2) => p1.node.frontmatter.order - p2.node.frontmatter.order)

  return (
    <div className={style.toc}>
      <h3>Contents</h3>
      <ul style={{ marginLeft: 0 }}>
        {filteredPosts.map(p => (
          <li>
            <Link
              activeClassName={style.activeTocItem}
              className={style.tocItem}
              to={p.node.fields.slug}
            >
              {p.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TOC
