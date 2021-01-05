import React from "react"
import Navbar from "./Navbar"
import "../dist/index.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Products from "./Products"
import Home from "./Home"
import Signup from "./Signup"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/products" component={Products} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
