import React, { Component } from "react"

class StoreInfo extends Component {
  render() {
    return (
      <div className="site-info " id="site-info">
        <div className="main">
          <h1>Store Info</h1>
          <hr className="seperator " />
        </div>

        <div className="shop-details">
          <div className="opening-hours">
            <h2>Hours of operation</h2>
            <hr className="seperator" />
            <div className="schedule">
              <h4>Monday</h4>{" "}
              <span>
                <hr />
              </span>
              <span>9:00 to 22:00</span>
            </div>
            <div className="schedule">
              <h4>Tuesday</h4>{" "}
              <span>
                <hr style={{ width: "15.4vw" }} />
              </span>
              <span>9:00 to 22:00</span>
            </div>
            <div className="schedule">
              <h4>Wednesday</h4>{" "}
              <span>
                <hr style={{ width: "13.3vw" }} />
              </span>
              <span>9:00 to 22:00</span>
            </div>
            <div className="schedule">
              <h4>Thursday</h4>{" "}
              <span>
                <hr style={{ width: "15vw" }} />
              </span>
              <span>9:00 to 22:00</span>
            </div>
            <div className="schedule">
              <h4>Friday</h4>
              <span>
                <hr style={{ width: "16.95vw" }} />
              </span>
              <span>9:00 to 23:59</span>
            </div>
            <div className="schedule">
              <h4>Saturday</h4>
              <span>
                <hr style={{ width: "15.1vw" }} />
              </span>
              <span>9:00 to 23:59</span>
            </div>
            <div className="schedule">
              <h4>Sunday</h4>
              <span>
                <hr style={{ width: "16.1vw" }} />
              </span>
              <span>9:00 to 22:00</span>
            </div>
          </div>
          <div className="contact">
            <h2>Contact us</h2>
            <hr className="seperator" />
            <div className="contact-details">
              <h3>
                Address:
                <span> Raymond Boulevard 24, New York</span>
              </h3>

              <h3>
                Email: <span>info@xyz.com</span>
              </h3>

              <h3>
                Tel:<span> +1-444-123-4567 </span>{" "}
              </h3>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3023.0592708799754!2d-74.1747738!3d40.7387213!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2537ec31b278f%3A0xaf7efb7a8db6344d!2s24%20Raymond%20Blvd%2C%20Newark%2C%20NJ%2007102%2C%20USA!5e0!3m2!1sen!2s!4v1590428901863!5m2!1sen!2s"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen=""
            title="map"
            aria-hidden="false"
          ></iframe>
        </div>
      </div>
    )
  }
}

export default StoreInfo
