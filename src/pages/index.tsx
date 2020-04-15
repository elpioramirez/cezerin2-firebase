import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Carousel from "../components/pages/home/carousel"
import Cards from "../components/pages/home/cards"
import "../components/pages/home/style.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel />
    <h2 className="title">Best sellers</h2>
    <div className="grid-container">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  </Layout>
)

export default IndexPage
