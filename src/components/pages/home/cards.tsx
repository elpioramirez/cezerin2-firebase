import React from "react"
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
} from "mdbreact"
import "./style.css"

const CardTemplate = data => {
  console.log(data.data)
  const item = data.data.node
  return (
    <MDBContainer className="cards">
      <MDBCard>
        <MDBCardImage
          top
          src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg"
          overlay="white-slight"
          hover
          waves
          alt={item.images.alt}
        />
        <MDBCardBody className="elegant-color white-text rounded-bottom">
          <a href="#!" className="activator waves-effect waves-light mr-4">
            <MDBIcon icon="share-alt" className="white-text" />
          </a>
          <MDBCardTitle>{item.slug}</MDBCardTitle>
          <hr className="hr-light" />
          <MDBCardText className="white-text">
            ${item.regular_price}
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

export default CardTemplate
