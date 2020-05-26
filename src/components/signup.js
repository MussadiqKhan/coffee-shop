import React, { Component } from "react"

class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <div className="main">
          <h1>Sign Up</h1>
          <hr className="seperator " />
        </div>
        <div>
          <form>
            <input type="email" name="email" />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup
