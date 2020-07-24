module.exports = {
  pathPrefix: `/bias-mitigation`,
  siteMetadata: {
    siteTitle: `Machine Learning Bias Mitigation`,
    defaultTitle: `Machine Learning Bias Mitigation`,
    siteTitleShort: `ML Bias Mitigation`,
    siteDescription: `See how to mitigate bias in your machine learning models.`,
    siteUrl: `https://cdeiuk.github.io/bias-mitigation/`,
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
        short_name: `ML Bias Mitigation`,
        start_url: `/`,
        background_color: `#f0ede3`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-173229929-1`,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://cdeiuk.github.io/bias-mitigation/`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
