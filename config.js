// client config file
module.exports = {
  // meta data
  title: `Cezerin2-Store`,
  description: `Cezerin2-store template.`,
  author: `@himadu`,
  // manifest(pwa/mobile) data
  name: `cezerin2-store`,
  short_name: `cezerin`,
  icon: `src/images/logo.png`, // svg also works but sometimes it bugs out // This path is relative to the root of the site.
  // mongodb settings
  // connectionString: `mongodb://127.0.0.1:27017/shop`,
  dbName: `shop`,
  // cezerin backend api
  cezein2URL: ``,
  // firebase config
  apiKey: "AIzaSyCD157Azp2GrkBGN6HC4s9mL8BmfDIyX-g",
  authDomain: "cezerin-store.firebaseapp.com",
  databaseURL: "https://cezerin-store.firebaseio.com",
  projectId: "cezerin-store",
  storageBucket: "cezerin-store.appspot.com",
  messagingSenderId: "857840593286",
  appId: "1:857840593286:web:ff68f8000b8c1f7b0ba407",
  measurementId: "G-2137SEGBGY",
  // firebase service account // placing this as enviroment is highly encourage
  clientEmail: "foo@<PROJECT_ID>.iam.gserviceaccount.com",
  privateKey: "-----BEGIN PRIVATE KEY-----\n<KEY>\n-----END PRIVATE KEY-----\n",
  // mailchimp endpoint
  // setup = https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/#mailchimp-endpoint
  mailEndpoint:
    "https://example.us10.list-manage.com/subscribe/post?u=b9ef2fdd3edofhec04ba9b930&id=3l948gkt1d",
  // stripe config
  secretKey: "sk_test_1234567890123456789012345678901234"
  // end of the config
}
