import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact"
import "./style.css"

const CardExample = () => {
  const data = useStaticQuery(graphql`
    query Products {
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

  return (
    <MDBContainer className="cards">
      <MDBCard>
        <MDBCardImage
          top
          src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg"
          overlay="white-slight"
          hover
          waves
          alt="MDBCard image cap"
        />
        <MDBCardBody className="elegant-color white-text rounded-bottom">
          <a href="#!" className="activator waves-effect waves-light mr-4">
            <MDBIcon icon="share-alt" className="white-text" />
          </a>
          <MDBCardTitle>MDBCard Title</MDBCardTitle>
          <hr className="hr-light" />
          <MDBCardText className="white-text">
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </MDBCardText>
          <a href="#!" className="black-text d-flex justify-content-end">
            <h5 className="white-text">
              Read more
              <MDBIcon icon="angle-double-right" className="ml-2" />
            </h5>
          </a>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default CardExample
