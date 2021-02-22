import React, { useState } from "react"
import axios from "axios"
import "./inputApi.scss"

import { ThreeDots } from "@agney/react-loading"

const InputApi = (props) => {
  const [initializing, setInitializing] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  return (
    <>
      <h4>Input your API credentials</h4>
      <div className="inputApiWrapper">
        <p className="signInLabel">Api Key</p>
        <input
          className="apiInput"
          type="text"
          value={props.apiKey}
          onChange={(e) => props.setApiKey(e.target.value)}
        />
        <p className="signInLabel">Secret</p>
        <input
          className="apiInput"
          type="text"
          value={props.secretKey}
          onChange={(e) => props.setSecretKey(e.target.value)}
        />
        <p className="signInLabel">Passphrase</p>
        <input
          className="apiInput"
          type="text"
          value={props.passphrase}
          onChange={(e) => props.setPassphrase(e.target.value)}
        />
        <div className={`message ${errorMessage ? "messageVisible" : ""}`}>
          <p className="messageText">{errorMessage}</p>
        </div>
        <button
          className="loginButton"
          onClick={() => {
            setInitializing(true)
            axios
              .get(`/coinbase/user`, {
                params: {
                  api_key: props.apiKey,
                  secret_key: props.secretKey,
                  passphrase: props.passphrase,
                },
              })
              .then((response) => {
                setInitializing(false)
                if (response.data.valid) {
                  props.toPurchase()
                } else {
                  setErrorMessage(response.data.message)
                }
              })
              .catch((error) => {
                setInitializing(false)
                // handle error
                setErrorMessage(error.message)
              })
          }}
        >
          {initializing ? (
            <ThreeDots width="24" color="#fff" />
          ) : (
            <span className="buttonLabel">Continue</span>
          )}
        </button>
      </div>
    </>
  )
}

export default InputApi
