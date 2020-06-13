import React from "react"
import { Link } from "gatsby"
import style from "./navigation.module.css"

const Navigation = ({ next, previous }) =>
  previous || next ? (
    <div className={style.navigation}>
      {previous && (
        <span className={style.button}>
          <Link to={previous.fields.slug}>
            <span className={style.iconPrev}>←</span>
            <span className={style.buttonText}>
              {previous.frontmatter.title}
            </span>
          </Link>
        </span>
      )}
      {next && (
        <span className={style.button}>
          <Link to={next.fields.slug}>
            <span className={style.buttonText}>{next.frontmatter.title}</span>
            <span className={style.iconNext}>→</span>
          </Link>
        </span>
      )}
    </div>
  ) : null

export default Navigation
