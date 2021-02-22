import React, { useState } from "react"
import axios from "axios"
import fire from "../../../fire"
import "./schedulePurchase.scss"

const SchedulePurchase = (props) => {
  const [amount, setAmount] = useState(10.0)
  const [coin, setCoin] = useState("BTC")
  const [time, setTime] = useState("Hourly")
  return (
    <>
      <h4>Make your purchase schedule</h4>
      <div className="scheduleRow">
        <p>Buy</p>
        <input
          className="apiInput"
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="$10.00"
        />
        <p>of</p>
        <select
          onChange={(e) => setCoin(e.target.value)}
          onBlur={(e) => setCoin(e.target.value)}
        >
          <option value="BTC">BTC</option>
          <option value="ETH">ETH</option>
          <option value="LTC">LTC</option>
        </select>
        <select
          onChange={(e) => setTime(e.target.value)}
          onBlur={(e) => setTime(e.target.value)}
        >
          <option value="Hourly">Hourly</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
      <button
        className="loginButton"
        onClick={() => {
          console.log(time, coin, amount)
          console.log(fire.auth().currentUser.uid)
          axios
            .post("/coinbase/plan", {
              params: {
                userUID: fire.auth().currentUser.uid,
                market: "coinbase",
                frequency: time,
                currency: coin,
                amount,
                api_key: props.apiKey,
                secret_key: props.secretKey,
                passphrase: props.passphrase,
              },
            })
            .then((response) => {
              console.log(response)
            })
            .catch((error) => {
              console.log(error)
            })
        }}
      >
        <span className="buttonLabel">Schedule Purchases</span>
      </button>
    </>
  )
}

export default SchedulePurchase
