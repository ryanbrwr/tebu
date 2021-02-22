import React, { useState } from "react"
import { Link as RouterLink, Redirect } from "react-router-dom"
import firebase from "firebase"

import "./scss/signIn.scss"

import fire from "../fire"

const SignIn = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailError, setEmailError] = useState()
  const [passwordError, setPasswordError] = useState()

  const handleLogin = (email, password) => {
    if (!email || !password) {
      if (!email) setEmailError("The email cannot be empty")
      if (!password) setPasswordError("The password cannot be empty")
      return
    }
    fire
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        fire
          .auth()
          .signInWithEmailAndPassword(email, password)
          .catch((err) => {
            switch (err.code) {
              case "auth/invalid-email":
              case "auth/user-disabled":
              case "auth/user-not-found":
                setEmailError(err.message)
                break
              case "auth/wrong-password":
                setPasswordError(err.message)
                break
            }
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleEmailChange = (e) => {
    setEmailError("")
    setPasswordError("")
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setEmailError("")
    setPasswordError("")
    setPassword(e.target.value)
  }

  if (props.user) {
    return <Redirect to="/dashboard" />
  }

  return (
    <div>
      <div className="signInContainer">
        <div className="signInWrapper">
          <div className="signInLogoContainer">
            <RouterLink to="/" className="logo">
              tebu
            </RouterLink>
          </div>
          <div className="signInCard">
            <div className="signInContent">
              <h2>Sign in to your account</h2>
              <p className="signInLabel">Email</p>
              <input
                className="loginInput"
                type="text"
                value={email}
                onChange={(e) => handleEmailChange(e)}
              />
              <div className={`message ${emailError ? "messageVisible" : ""}`}>
                <p className="messageText">{emailError}</p>
              </div>
              <div className="labelRow">
                <p className="signInLabel">Password</p>
                <a href="/forgot" className="signInLabel forgotLink">
                  Forgot your password?
                </a>
              </div>
              <input
                className="loginInput"
                type="password"
                value={password}
                onChange={(e) => handlePasswordChange(e)}
              />
              <div
                className={`message ${passwordError ? "messageVisible" : ""}`}
              >
                <p className="messageText">{passwordError}</p>
              </div>
              <button
                className="loginButton"
                onClick={() => handleLogin(email, password)}
              >
                <span className="buttonLabel">Continue</span>
              </button>
              <p className="signInLabel">
                Don't have an acccount?{" "}
                <a href="/signup" className="forgotLink">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
