import React from "react"
import Navbar from "./Navbar"
import "../dist/index.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Products from "./Products"
import Home from "./Home"
import Signup from "./Auth/Signup"
import Signin from "./Auth/Signin"
import Signout from "./Auth/Signout"
import PageNotFound from "./PageNotFound"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/signout" component={Signout} />
          <Route path="/products" component={Products} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
