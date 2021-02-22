import React, { useState } from "react"
import { Link as RouterLink, Redirect } from "react-router-dom"

import "./scss/signIn.scss"

import fire from "../fire"

const Forgot = (props) => {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  const handleForgot = (email) => {
    fire
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailError("Check your inbox for instructions")
      })
      .catch((error) => {
        setEmailError(error.message)
      })
  }

  const changeEmailHandler = (e) => {
    setEmailError("")
    setEmail(e.target.value)
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
              <h2>Reset your password</h2>
              <p className="forgotDescription">
                Enter the email address associated with your account and we'll
                send you a link to reset your password
              </p>
              <p className="signInLabel">Email</p>
              <input
                className="loginInput"
                type="text"
                value={email}
                onChange={(e) => changeEmailHandler(e)}
              />
              <div className={`message ${emailError ? "messageVisible" : ""}`}>
                <p className="messageText">{emailError}</p>
              </div>
              <button
                className="loginButton"
                onClick={() => handleForgot(email)}
              >
                <span className="buttonLabel">Continue</span>
              </button>
              <a href="/signin" className="signInLabel forgotLink">
                Return to sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Forgot
