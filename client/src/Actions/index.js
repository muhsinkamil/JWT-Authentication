import axios from "axios"
import { AUTH_USER, AUTH_ERROR } from "./types"

export const signup = (formValues, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signup",
      formValues
    )
    dispatch({ type: AUTH_USER, payload: response.data.token })
    localStorage.setItem("token", response.data.token)
    callback()
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email in use" })
  }
}

export const signin = (formValues, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signin",
      formValues
    )

    dispatch({ type: AUTH_USER, payload: response.data.token })
    localStorage.setItem("token", response.data.token)
    callback()
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Username or password is incorrect" })
  }
}

export const signout = () => {
  localStorage.removeItem("token")
  return { type: AUTH_USER, payload: "" }
}
