require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Harris Geo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass",
    "gatsby-plugin-styled-components",
    `gatsby-plugin-typescript`,
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "harrisgeo",
        accessToken: process.env.API_KEY,
        schemas: {
          page: require("./src/schemas/page.json"),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-137238882-1",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
