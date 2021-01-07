import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"

import { compose } from "redux"
import { connect } from "react-redux"

import { signup } from "../Actions"

class Signup extends Component {
  onSubmit = (formValues) => {
    this.props.signup(formValues, () => {
      this.props.history.push('/products')
    })
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="signup-form"
      >
        <h3>Sign up here</h3>
        <Field
          name="email"
          type="email"
          component="input"
          placeholder="johndoe@example.com"
          autoComplete="off"
        />

        <Field
          name="password"
          type="password"
          component="input"
          placeholder="Password"
          autoComplete="off"
        />

        <div className="form-error">{this.props.errorMessage}</div>

        <button>Submit</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
  }
}

export default compose(
  connect(mapStateToProps, { signup }),
  reduxForm({ form: "signup" })
)(Signup)
