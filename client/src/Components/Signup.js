import React, { Component } from "react"
import { Field, reduxForm } from "redux-form"

class Signup extends Component {
  onSubmit = (formValues) => {
    console.log(formValues)
  }
  
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <label>Email</label>
        <Field name="email" type="text" component="input" autoComplete="off" />

        <label>Password</label>
        <Field
          name="password"
          type="password"
          component="input"
          autoComplete="off"
        />

        <button>Submit</button>
      </form>
    )
  }
}

export default reduxForm({ form: "signup" })(Signup)
