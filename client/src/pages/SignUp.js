import React, { useState } from "react"
import { Link as RouterLink, Redirect } from "react-router-dom"

import "./scss/signIn.scss"

import fire from "../fire"

const SignUp = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [emailError, setEmailError] = useState()
  const [passwordError, setPasswordError] = useState()
  const [nameError, setNameError] = useState()

  const handleEmailChange = (e) => {
    setEmailError("")
    setPasswordError("")
    setNameError("")
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setEmailError("")
    setPasswordError("")
    setNameError("")
    setPassword(e.target.value)
  }

  const handleNameChange = (e) => {
    setEmailError("")
    setPasswordError("")
    setNameError("")
    setName(e.target.value)
  }

  const handleSignUp = (email, password, name) => {
    if (!email || !password || !name) {
      if (!email) setEmailError("Email cannot be empty")
      if (!password) setPasswordError("Password cannot be empty")
      if (!name) setNameError("Name cannot be empty")
      return
    }
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        user.updateProfile({
          displayName: name,
        })
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message)
            break
          case "auth/weak-password":
            setPasswordError(err.message)
            break
        }
      })
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
              <h2>Create your account</h2>
              <p className="signInLabel">Name</p>
              <input
                className="loginInput"
                type="text"
                value={name}
                onChange={(e) => handleNameChange(e)}
              />
              <div className={`message ${nameError ? "messageVisible" : ""}`}>
                <p className="messageText">{nameError}</p>
              </div>
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
                onClick={() => handleSignUp(email, password, name)}
              >
                <span className="buttonLabel">Continue</span>
              </button>
              <p className="signInLabel">
                Already have an acccount?{" "}
                <a href="/signin" className="forgotLink">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
