import React from "react"
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
} from "mdbreact"

const ThumbnailsCarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        thumbnails
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <img
              className="d-block w-100"
              src="https://assets.cezerin.net/assets/images/slide8.jpg"
              alt="First slide"
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <img
              className="d-block w-100"
              src="https://assets.cezerin.net/assets/images/slide7.jpg"
              alt="Second slide"
            />
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <img
              className="d-block w-100"
              src="https://assets.cezerin.net/assets/images/slide9.jpg"
              alt="Third slide"
            />
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  )
}

export default ThumbnailsCarouselPage
