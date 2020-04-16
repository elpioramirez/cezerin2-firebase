if (!process.env.GITHUB_ACTION) {
  require("dotenv").config()
}
const parseNewLines = function(key) {
  return typeof key === "string" ? key.replace(/\\n/g, "\n") : key
}
const privateKey = parseNewLines(process.env.FIREBASE_CONFIG_PRIVATE_KEY)
const stripePrivateKey = parseNewLines(process.env.STRIPE_CONFIG_KEY)
const DBUser = parseNewLines(process.env.MONGODB_CONFIG_USER)
const DBPassword = parseNewLines(process.env.MONGODB_CONFIG_PASSWORD)
const DBCluster = parseNewLines(process.env.MONGODB_CONFIG_CLUSTER)
const DBDataBase = parseNewLines(process.env.MONGODB_CONFIG_DATABASE)
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
        short_name: `cezerin`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // svg also works but sometimes it bugs out // This path is relative to the root of the site.
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
        connectionString: `mongodb+srv://${DBUser}:${DBPassword}@${DBCluster}.mongodb.net/${DBDataBase}?retryWrites=true&w=majority`,
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
        credentials: {
          apiKey: "AIzaSyCD157Azp2GrkBGN6HC4s9mL8BmfDIyX-g",
          authDomain: "cezerin-store.firebaseapp.com",
          databaseURL: "https://cezerin-store.firebaseio.com",
          projectId: "cezerin-store",
          storageBucket: "cezerin-store.appspot.com",
          messagingSenderId: "857840593286",
          appId: "1:857840593286:web:ff68f8000b8c1f7b0ba407",
          measurementId: "G-2137SEGBGY",
        },
        loginPath: "/user/login",
        loginRedirectPath: "/contact",
        socialLogins: ["google"],
      },
    },
  ],
}
