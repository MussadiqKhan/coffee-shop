import React, { Component } from "react"

class Hero extends Component {
  render() {
    return (
      <div className="hero" style={{ background: `url(../images/hero.jpg)` }}>
        <div className="text">
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        </div>
        <div>
          <button>Join Today</button>
        </div>
      </div>
    )
  }
}

export default Hero
