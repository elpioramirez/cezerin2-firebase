if (!process.env.GITHUB_ACTION) {
  require("dotenv").config()
}
const parseNewLines = function(key) {
  return typeof key === "string" ? key.replace(/\\n/g, "\n") : key
}
const privateKey = parseNewLines(process.env.FIREBASE_CONFIG_PRIVATE_KEY)
const stripePrivateKey = parseNewLines(process.env.STRIPE_CONFIG_KEY)
module.exports = {
  siteMetadata: {
    title: `Cezerin2-Store`,
    description: `Cezerin2-store template.`,
    author: `@himadu`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cezerin2-store`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // sitemap
    `gatsby-plugin-sitemap`,
    // Robots.txt
    "gatsby-plugin-robots-txt",
    // sass/scss
    `gatsby-plugin-sass`,
    // Page Load screen
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    // typescript
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `React`, // was jsx defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    /*
     * Gatsby's data processing layer begins with “source” plugins. Here we
     * setup the site to pull data from the "documents" collection in a local
     * MongoDB instance
     */
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: ``,
        dbName: `shop`,
        collection: [`pages`, `products`],
      },
    },
    // stripe
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: [
          "Balance",
          "BalanceTransaction",
          "Product",
          "ApplicationFee",
          "Sku",
          "Subscription",
        ],
        secretKey: stripePrivateKey,
        downloadFiles: true,
      },
    },
    // firebase theme
    {
      resolve: "gatsby-theme-firebase",
      options: {
        credentials: {},
        loginPath: "/user/login",
        loginRedirectPath: "/contact",
        socialLogins: ["google"],
      },
    },
  ],
}
