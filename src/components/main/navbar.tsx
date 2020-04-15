import React, { useState } from "react"
import { MDBIcon, MDBInput } from "mdbreact"
import { Link } from "gatsby"
import "./navigate.css"

const NavbarPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  return (
    <div className="body">
      <p className="logo">Cezerin</p>
      <div className="search">
        <MDBIcon icon="search" className="icon" />
        <input placeholder="Search" type="text" className="input" />
      </div>
      <div className="flex-end">
        <div className="items">
          <Link to="" className="item">
            Category
          </Link>
          <Link to="" className="item">
            Category
          </Link>
          <Link to="" className="item">
            Category
          </Link>
          <Link to="" className="item">
            Contact Us
          </Link>
        </div>
        <button className="cart button">
          <MDBIcon icon="shopping-bag" />
        </button>
        <button className="user button">
          <MDBIcon icon="user-circle" />
        </button>
      </div>
    </div>
  )
}

export default NavbarPage
