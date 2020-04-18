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
      <MDBIcon icon="bars" className="bars" />
      <div className="flex-end">
        <MDBIcon icon="search" className="icon" />
        <input placeholder="Search" type="text" className="input" />
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
        <button className="cart button">
          <MDBIcon icon="shopping-bag" size="2x" />
        </button>
        <Link to="/user/login" className="user-button">
          <MDBIcon icon="user-circle" size="2x" />
        </Link>
      </div>
    </div>
  )
}

export default NavbarPage
