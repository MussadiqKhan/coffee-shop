import React, { Component } from "react"
import coffee1 from "../../static/images/coffee-1.jpg"
import coffee2 from "../../static/images/coffee-2.jpg"
import coffee3 from "../../static/images/coffee-3.jpg"
import coffee4 from "../../static/images/coffee-4.jpg"
import coffee5 from "../../static/images/coffee-5.jpg"
import coffee6 from "../../static/images/coffee-6.jpg"

class Gallery extends Component {
  render() {
    return (
      <div className="gallery" id="gallery">
        <div className="main">
          <h1>Gallery</h1>
          <hr className="seperator " />
        </div>
        <div className="image-grid">
          <div className="image-item">
            <img src={coffee6} alt="coffee-6" />
          </div>
          <div className="image-item">
            <img src={coffee4} alt="coffee-4" />
          </div>
          <div className="image-item">
            <img src={coffee3} alt="coffee-3" />
          </div>
          <div className="image-item">
            <img src={coffee2} alt="coffee-2" />
          </div>
          <div className="image-item">
            <img src={coffee5} alt="coffee-5" />
          </div>
          <div className="image-item">
            <img src={coffee1} alt="coffee-1" />
          </div>
          <div className="image-item">
            <img src={coffee2} alt="coffee-2" />
          </div>
          <div className="image-item">
            <img src={coffee6} alt="coffee-6" />
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery
