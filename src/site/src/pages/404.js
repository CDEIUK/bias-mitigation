import React from "react"
import { Link } from "gatsby"
import { MdErrorOutline } from "react-icons/md"

import Layout from "@rocketseat/gatsby-theme-docs/src/components/Layout"
import SEO from "@rocketseat/gatsby-theme-docs/src/components/SEO"

export default function NotFound() {
  return (
    <Layout title="Page not found!">
      <SEO title="404: Not found" />
      <p>You just hit a route that doesn&#39;t exist...</p>
      <p>
        If you&#39;d like to go back to start page,{" "}
        <Link to="/">click here</Link>.
      </p>
      <p>
        <div>
          <MdErrorOutline size={45} />
        </div>
      </p>
    </Layout>
  )
}
