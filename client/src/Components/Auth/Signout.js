import React, { Component } from "react"
import { connect } from "react-redux"
import { signout } from "../../Actions"

class Signout extends Component {
  componentDidMount() {
    this.props.signout()
  }

  render() {
    return <h2>See you!!!</h2>
  }
}

export default connect(null, { signout })(Signout)
