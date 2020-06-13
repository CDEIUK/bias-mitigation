import React from "react"
import { Link } from "gatsby"
import style from "./navigation.module.css"

const Navigation = ({ next, previous, nextLabel, previousLabel }) =>
  previous || next ? (
    <div className={style.navigation}>
      {previous && (
        <span className={style.button}>
          <Link to={previous}>
            <span className={style.iconPrev}>←</span>
            <span className={style.buttonText}>{previousLabel}</span>
          </Link>
        </span>
      )}
      {next && (
        <span className={style.button}>
          <Link to={next}>
            <span className={style.buttonText}>{nextLabel}</span>
            <span className={style.iconNext}>→</span>
          </Link>
        </span>
      )}
    </div>
  ) : null

export default Navigation
