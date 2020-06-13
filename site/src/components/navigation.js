import React from "react"
import { Link } from "gatsby"

const Navigation = ({ next, previous, nextLabel, previousLabel }) =>
  previous || next ? (
    <div>
      {previous && <Link to={previous}>{previousLabel}</Link>}
      {next && <Link to={next}>{nextLabel}</Link>}
    </div>
  ) : null

export default Navigation
