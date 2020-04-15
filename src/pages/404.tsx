import React from "react"

import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon,
} from "mdbreact"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <MDBJumbotron style={{ margin: 0, padding: 0 }}>
      <MDBCol
        className="text-white text-center py-5 px-4 my-5"
        style={{
          backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`,
        }}
      >
        <MDBCol className="py-5">
          <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
            NOT FOUND
          </MDBCardTitle>
          <p className="mx-5 mb-5">
            You just hit a route that doesn't exist... the sadness!
          </p>
          <MDBBtn outline color="white" className="mb-5">
            <MDBIcon icon="clone" className="mr-2"></MDBIcon> View project
          </MDBBtn>
        </MDBCol>
      </MDBCol>
    </MDBJumbotron>
  </Layout>
)

export default NotFoundPage
