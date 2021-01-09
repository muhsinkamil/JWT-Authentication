import React, { Component } from "react"
import { connect } from "react-redux"
import { compose } from "redux"
import { Field, reduxForm } from "redux-form"

import { signin } from "../../Actions"

class Signin extends Component {
  onSubmit = (formValues) => {
    this.props.signin(formValues, () => {
        this.props.history.push('/')
    })
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="form-group"
      >
        <h3>Sign in !!</h3>
        <Field
          name="email"
          type="email"
          component="input"
          placeholder="Your email"
          autoComplete="off"
        />
        <Field
          name="password"
          type="password"
          component="input"
          placeholder="Password"
          autoComplete="off"
        />
        <div>{ this.props.errorMessage }</div>
        <button>Sign in</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { errorMessage: state.auth.errorMessage }
}

export default compose(
  connect(mapStateToProps, { signin }),
  reduxForm({ form: "signin" })
)(Signin)
