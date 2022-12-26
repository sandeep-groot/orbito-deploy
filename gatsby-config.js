module.exports = {
  siteMetadata: {
    title: `Orbito Project`,
    description: `Orbito template`,
    twitterUsername: `@gatsbyjs`,
    image: `/icon-512x512.png`,
    siteUrl: `https://www.yourdomain.tld`,
    author: "",
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    "gatsby-plugin-layout",
    "gatsby-plugin-less",
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
    "gatsby-plugin-next-seo",

    // {
    //   resolve: `gatsby-plugin-dynamic-routes`,
    //   options: {
    //     routeFilePath: `config/Routes.js`,
    //   },
    // },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "http://orbitoqa.grootsoftwares.com:5000/api/blog",
        rootKey: "blogs",
        schemas: {
          blogs: `
          bTitle: String
          slug: String
          `,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `orbotoreactwithgatsby`,
        short_name: `orboto`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon-512x512.png`, // This path is relative to the root of the site.
      },
    },
    //This plugin exists only once but can consume an array of endpoints
    // {
    //   resolve: "gatsby-source-rest-api",
    //   options: {
    //     endpoints: [`http://orbitoqa.grootsoftwares.com:5000/api/blog`],
    //   },
    // },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: `blog`,
    //     path: `${__dirname}/blog`,
    //   },
    // },

    // {
    //   resolve: `gatsby-source-mysql`,
    //   options: {
    //     connectionDetails: {
    //       host: "97.74.92.197",
    //       user: "root",
    //       password: "Groot@123",
    //       database: "gatsbyorbito",
    //     },
    //     queries: [
    //       {
    //         statement: "SELECT * FROM blogs",
    //       },
    //     ],
    //   },
    // },
  ],
}
