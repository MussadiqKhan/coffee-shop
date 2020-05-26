import React, { Component } from "react"
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai"

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="footer">
        <footer>
          <div class="footer-contact">
            <h3>Raymond Boulevard 24, New York</h3>
            <h3>123-456-7890</h3>
          </div>
          <div className="social">
            <AiOutlineFacebook size={32} />
            <AiOutlineInstagram size={32} />
            <AiOutlineTwitter size={32} />
          </div>
        </footer>
        <div className="copyright">
          Copyright © 2019 CoffeShop. All Rights Reserved. Developed by{" "}
          <a href="https://www.fiverr.com/musadiqkhan/create-a-static-responsive-website-with-gtasby">
            Mussadiq Khan
          </a>
        </div>
      </div>
    )
  }
}

export default Footer
