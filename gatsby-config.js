const config = require("./config")
if (!process.env.GITHUB_ACTION) {
  require("dotenv").config()
}
const parseNewLines = function(key) {
  return typeof key === "string" ? key.replace(/\\n/g, "\n") : key
}
const DBUser = parseNewLines(process.env.MONGODB_CONFIG_USER)
const DBPassword = parseNewLines(process.env.MONGODB_CONFIG_PASSWORD)
const DBServerName = parseNewLines(process.env.MONGODB_CONFIG_SERVER_NAME)
const DBDataBase = parseNewLines(process.env.MONGODB_CONFIG_DATABASE)
const firebaseKey = parseNewLines(process.env.FIREBASE_KEY)
module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    author: config.author
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.name,
        short_name: config.short_name,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: config.icon // svg also works but sometimes it bugs out // This path is relative to the root of the site.
      }
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
        showSpinner: true
      }
    },
    // typescript
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `React`, // was jsx defaults to "React"
        allExtensions: true // defaults to false
      }
    },
    /*
     * Gatsby's data processing layer begins with “source” plugins. Here we
     * setup the site to pull data from the "documents" collection in a local
     * MongoDB instance
     */
    // {
    //   resolve: `gatsby-source-mongodb`,
    //   options: {
    //     connectionString:
    //       config.connectionString ||
    //       `mongodb+srv://${DBUser}:${DBPassword}@${DBServerName}.mongodb.net/${DBDataBase}?retryWrites=true&w=majority`,
    //     dbName: config.dbName,
    //     collection: [`pages`, `products`]
    //   }
    // },
    {
      resolve: "gatsby-source-flamelink",
      options: {
        firebaseConfig: {
          pathToServiceAccount: {
            projectId: config.projectId,
            clientEmail: "foo@<PROJECT_ID>.iam.gserviceaccount.com",
            privateKey: firebaseKey || process.env.FIREBASE_KEY
          },
          databaseURL: config.databaseURL,
          storageBucket: config.storageBucket
        },
        dbType: "cf",
        environment: "production",
        content: true,
        populate: true,
        navigation: true,
        globals: true
      }
    },
    // stripe
    /*{
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
        secretKey: config.secretKey,
        downloadFiles: true,
      },
    },*/
    // mailchimp
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: config.mailEndpoint // add your MC list endpoint here; see instructions below
      }
    },
    // firebase theme
    {
      resolve: "gatsby-theme-firebase",
      options: {
        credentials: {
          apiKey: config.apiKey,
          authDomain: config.authDomain,
          databaseURL: config.databaseURL,
          projectId: config.projectId,
          storageBucket: config.storageBucket,
          messagingSenderId: config.messagingSenderId,
          appId: config.appId,
          measurementId: config.measurementId
        },
        loginPath: "/user/login",
        loginRedirectPath: "/",
        socialLogins: ["google"]
      }
    }
  ]
}
