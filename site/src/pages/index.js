import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h3>Welcome</h3>
    <p>
      Curious about the Adult dataset? Click{" "}
      <Link to="/finance/intro">here</Link>
    </p>
  </Layout>
)
