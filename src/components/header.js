import React from "react"
import "../styles/header.css"
import { GiHamburgerMenu } from "react-icons/gi"
import { Helmet } from "react-helmet"
import { withPrefix, Link } from "gatsby"
import logo from "../../static/images/logo.png"

const Header = () => {
  return (
    <div className="header">
      <Helmet>
        <script src={withPrefix("script.js")} type="text/javascript" />
      </Helmet>
      <nav>
        <div className="toggle">
          <div className="logo">
            <img src={logo} width="60" />
          </div>
          <div className="menus" id="menus">
            <GiHamburgerMenu className="burger" />
          </div>
        </div>

        <ul id="UL">
          <div className="logo_large">
            <img src={logo} width="60" />
          </div>
          <Link to="/#site-info">
            {" "}
            <li>Store Info</li>{" "}
          </Link>
          <Link to="/#brewers">
            <li>Our Brewers</li>
          </Link>
          <Link to="/#gallery">
            <li>Gallery</li>
          </Link>
          <Link to="/#menu">
            <li>Menu</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header
