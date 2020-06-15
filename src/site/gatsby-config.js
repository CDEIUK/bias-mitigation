module.exports = {
  pathPrefix: `/cdei-development`,
  siteMetadata: {
    title: `CDEI Bias Exploration`,
    description: `This is an exploration of bias in various datasets.`,
    author: `@facultyai`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cdei-bias`,
        short_name: `cdei`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/site-favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
