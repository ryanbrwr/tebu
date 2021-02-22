import "./App.scss"
import React, { useState, useEffect } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Bars } from "@agney/react-loading"
import fire from "./fire"

import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Forgot from "./pages/Forgot"
import About from "./pages/About"
import Faq from "./pages/Faq"
import Prices from "./pages/Prices"
import Dashboard from "./pages/Dashboard"

function App() {
  const [user, setUser] = useState("")
  const [initializing, setInitializing] = useState(true)

  const authListener = () => {
    fire.auth().onAuthStateChanged((newUser) => {
      if (newUser) {
        setUser(newUser)
        setInitializing(false)
      } else {
        setUser("")
        setInitializing(false)
      }
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  if (initializing) {
    return (
      <div className="initializingContainer">
        <Bars width="50" color="#d4d4d4" className="loadingIcon" />
      </div>
    )
  }
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Home user={user} />} />
          <Route path="/signin" exact render={() => <SignIn user={user} />} />
          <Route path="/signup" exact render={() => <SignUp user={user} />} />
          <Route path="/forgot" exact render={() => <Forgot user={user} />} />
          <Route path="/about" exact render={() => <About user={user} />} />
          <Route path="/faq" exact render={() => <Faq user={user} />} />
          <Route path="/prices" exact render={() => <Prices user={user} />} />
          <Route
            path="/dashboard"
            exact
            render={() => <Dashboard user={user} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
