import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class Navbar extends Component {
  renderLinks = () => {
    if (!this.props.authenticated) {
      return (
        <>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
        </>
      )
    } else {
      return (
        <li>
          <Link to="/signout">Sign out</Link>
        </li>
      )
    }
  }

  render() {
    return (
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(Navbar)
