module.exports = {
  pathPrefix: `/cdei-development`,
  siteMetadata: {
    siteTitle: `ML Bias Exploration`,
    defaultTitle: `ML Bias Exploration`,
    siteTitleShort: `ML Bias`,
    siteDescription: `Exploring bias in machine learning (ML) models`,
    siteUrl: `https://imrehg.github.io/cdei-development`,
    siteAuthor: `@rocketseat`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    basePath: `/`,
    footer: `Theme by Rocketseat`,
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
        name: `Machine Learning Bias Exploration`,
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
};
