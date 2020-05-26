import React, { Component } from "react"

class Menu extends Component {
  render() {
    return (
      <div className="menu" id="menu">
        <div className="main">
          <h1>Menu</h1>
          <hr className="seperator " />
        </div>

        <div className="menu-details">
          <div className="opening-hours">
            <h2>Coffee Menu</h2>
            <hr className="seperator" />
            <div className="schedule">
              <h4>Moca</h4>{" "}
              <span>
                <hr style={{ width: "35.2vw" }} />
              </span>
              <span>$3</span>
            </div>
            <div className="schedule">
              <h4>Lattee</h4>{" "}
              <span>
                <hr style={{ width: "34.9vw" }} />
              </span>
              <span>$3</span>
            </div>
            <div className="schedule">
              <h4>Moca</h4>{" "}
              <span>
                <hr style={{ width: "35.3vw" }} />
              </span>
              <span>$3</span>
            </div>
            <div className="schedule">
              <h4>Lattee</h4>{" "}
              <span>
                <hr style={{ width: "35vw" }} />
              </span>
              <span>$5</span>
            </div>
            <div className="schedule">
              <h4>Moca</h4>
              <span>
                <hr style={{ width: "35.55vw" }} />
              </span>
              <span>$5</span>
            </div>
            <div className="schedule">
              <h4>Lattee</h4>
              <span>
                <hr style={{ width: "35.4vw" }} />
              </span>
              <span>$10</span>
            </div>
            <div className="schedule">
              <h4>Tea</h4>
              <span>
                <hr style={{ width: "37.1vw" }} />
              </span>
              <span>$22</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu
