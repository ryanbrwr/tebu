import React, { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import "./buy.scss"

import ChooseMarket from "../ChooseMarket/ChooseMarket"
import InputApi from "../InputApi/InputApi"
import SchedulePurchase from "../SchedulePurchase/SchedulePurchase"

const Buy = () => {
  const [onMarket, setOnMarket] = useState(true)
  const [onApi, setOnApi] = useState(false)
  const [onPurchase, setOnPurchase] = useState(false)
  const [apiKey, setApiKey] = useState("")
  const [secretKey, setSecretKey] = useState("")
  const [passphrase, setPassphrase] = useState("")

  const toMarket = () => {
    setOnMarket(true)
    setOnApi(false)
    setOnPurchase(false)
  }

  const toApi = () => {
    setOnMarket(false)
    setOnApi(true)
    setOnPurchase(false)
  }

  const toPurchase = () => {
    setOnMarket(false)
    setOnApi(false)
    setOnPurchase(true)
  }

  return (
    <div className="buyContainer">
      <h2 className="buyTitle">Schedule Purchase</h2>
      <div className="buyProgressContainer">
        <p
          className={`buyProgressText clickable ${onMarket ? "active" : ""}`}
          onClick={() => toMarket()}
        >
          CHOOSE MARKET
        </p>
        <FaArrowRight className="rightArrowIcon" />
        <p className={`buyProgressText ${onApi ? "active" : ""}`}>API KEY</p>
        <FaArrowRight className="rightArrowIcon" />
        <p className={`buyProgressText ${onPurchase ? "active" : ""}`}>
          PURCHASE
        </p>
      </div>
      <div className="buyCard">
        {onMarket ? (
          <ChooseMarket toApi={toApi} />
        ) : onApi ? (
          <InputApi
            toPurchase={toPurchase}
            apiKey={apiKey}
            setApiKey={setApiKey}
            secretKey={secretKey}
            setSecretKey={setSecretKey}
            passphrase={passphrase}
            setPassphrase={setPassphrase}
          />
        ) : onPurchase ? (
          <SchedulePurchase
            apiKey={apiKey}
            secretKey={secretKey}
            passphrase={passphrase}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Buy
