import React from "react"
import "./chooseMarket.scss"

import CoinBaseProLogo from "../../../img/coinbase-pro.svg"

const ChooseMarket = (props) => (
  <>
    <h4>Choose your market</h4>
    <div className="marketContentContainer">
      <div
        className="marketContainer"
        onClick={() => {
          props.toApi()
        }}
      >
        <img
          className="marketLogo"
          src={CoinBaseProLogo}
          alt="logo"
          height="24"
          width="24"
        />
        <h4 className="marketName">Coinbase Pro</h4>
      </div>
    </div>
  </>
)

export default ChooseMarket
