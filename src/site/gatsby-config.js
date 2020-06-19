module.exports = {
  pathPrefix: `/cdei-development`,
  siteMetadata: {
    siteTitle: `Machine Learning Bias Mitigation`,
    defaultTitle: `Machine Learning Bias Mitigation`,
    siteTitleShort: `ML Bias`,
    siteDescription: `See how to mitigate bias in your machine learning models.`,
    siteUrl: `https://imrehg.github.io/cdei-development`,
    siteAuthor: `@rocketseat`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    basePath: `/`,
    footer: ``,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/content`,
        baseDir: `src/site`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Machine Learning Bias Mitigation`,
        short_name: `ML Bias`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://imrehg.github.io/cdei-development`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
