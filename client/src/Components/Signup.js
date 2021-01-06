import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"

class Signup extends Component {
  onSubmit = (formValues) => {
    console.log(formValues)
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="signup-form"
      >
        <Field
          name="email"
          type="text"
          component="input"
          placeholder="mymail@example.com"
          autoComplete="off"
        />

        <Field
          name="password"
          type="password"
          component="input"
          placeholder="Password"
          autoComplete="off"
        />

        <button>Submit</button>
      </form>
    )
  }
}

export default reduxForm({ form: "signup" })(Signup)
