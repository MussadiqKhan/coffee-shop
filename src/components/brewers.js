import React, { Component } from "react"
import brewer from "../../static/images/coffee-brewer.png"

class Brewers extends Component {
  render() {
    return (
      <div className="brewers" id="brewers">
        <div className="main">
          <h1>Our Brewers</h1>
          <hr className="seperator " />
        </div>
        <div className="brewers-details">
          <div className="company-brewer">
            <img src={brewer} alt="blue-bottle logo" width="150" />
            <h4>Lorem</h4>
          </div>
          <div className="company-brewer">
            <img src={brewer} alt="blue-bottle logo" width="150" />
            <h4>Lorem</h4>
          </div>
          <div className="company-brewer">
            <img src={brewer} alt="blue-bottle logo" width="150" />
            <h4>Lorem</h4>
          </div>
          <div className="company-brewer">
            <img src={brewer} alt="blue-bottle logo" width="150" />
            <h4>Lorem</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Brewers
