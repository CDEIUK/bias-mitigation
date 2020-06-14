import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h3>Welcome</h3>
    <p>
      Curious about applications in finance? Click{" "}
      <Link to="/finance/intro/">here</Link>.
    </p>
    <p>
      Curious about applications in recruiting? Click{" "}
      <Link to="/recruiting/intro/">here</Link>.
    </p>
  </Layout>
)
