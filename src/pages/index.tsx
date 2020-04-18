import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Carousel from "../components/pages/home/carousel"
import Cards from "../components/pages/home/cards"
import "../components/pages/home/style.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMongodbShopProducts(
        filter: { discontinued: { eq: false }, enabled: { eq: true } }
      ) {
        edges {
          node {
            images {
              filename
              alt
            }
            regular_price
            name
          }
        }
      }
    }
  `)
  const Items = data.allMongodbShopProducts.edges
  const listItems = Items.map(value => <Cards data={value} />)
  return (
    <Layout>
      <SEO title="Home" />
      <Carousel />
      <h2 className="title">Best sellers</h2>
      <div className="grid-container">{listItems}</div>
    </Layout>
  )
}

export default IndexPage
