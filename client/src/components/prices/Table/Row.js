import React from "react"
import "./table.scss"

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
})

const milliBilli = (number) => {
  if (number / 1000000000000 > 1) {
    const newNum = number / 1000000000000
    return `$${newNum.toFixed(1)}T`
  }
  if (number / 1000000000 > 1) {
    const newNum = number / 1000000000
    return `$${newNum.toFixed(1)}B`
  }
  const newNum = number / 1000000
  return `$${newNum.toFixed(1)}M`
}

const Row = (props) => (
  <div className="coinRow">
    <div className="dataContainer endRow">
      <img src={props.icon} alt="logo" height="24" width="24" />
      <p className="coinName">{props.name}</p>
      <p className="coinTicker">{props.ticker}</p>
    </div>
    <div className="dataContainer endMobile endRowMobile">
      <p className="tableNumber">{formatter.format(props.data.usd)}</p>
    </div>
    <div className="dataContainer noMobile">
      <p className="tableNumber">{props.data.usd_24h_change.toFixed(4)}%</p>
    </div>
    <div className="dataContainer noMobile">
      <p className="tableNumber">{milliBilli(props.data.usd_24h_vol)}</p>
    </div>
    <div className="dataContainer noMobile">
      <p className="tableNumber">{milliBilli(props.data.usd_market_cap)}</p>
    </div>
  </div>
)

export default Row
