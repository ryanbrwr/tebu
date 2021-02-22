import React from "react"
import Icon from "../../../img/finance.svg"
import "./services.scss"

import fast from "../../../img/fast.svg"
import safe from "../../../img/safe.svg"
import custom from "../../../img/custom.svg"

const Services = () => (
  <div className="servicesContainer">
    <h2 className="servicesHeader">Tebu is</h2>
    <div className="servicesWrapper">
      <div className="servicesCard">
        <img className="servicesImg" src={fast} />
        <h2 className="servicesSubtitle">Quick & Easy</h2>
        <p className="servicesDescription">
          Just enter your API credentials, make a purchase schedule, and watch
          your investment accumulate
        </p>
      </div>
      <div className="servicesCard">
        <img className="servicesImg" src={safe} />
        <h2 className="servicesSubtitle">100% Secure</h2>
        <p className="servicesDescription">
          Tebu never stores any of your personal information or coins,
          everything goes directly through the market API and to your personal
          wallet
        </p>
      </div>
      <div className="servicesCard">
        <img className="servicesImg" src={custom} />
        <h2 className="servicesSubtitle">Fully Customizable</h2>
        <p className="servicesDescription">
          You can place hourly, daily, weekly, or monthly orders of any amount
          to make sure you're getting the best price
        </p>
      </div>
    </div>
  </div>
)

export default Services
