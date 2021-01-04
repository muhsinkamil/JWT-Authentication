import React, { Component } from "react"
import {  Link } from "react-router-dom"

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/" className="tags">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
          <li>
            <Link to="/signout">Sign out</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
