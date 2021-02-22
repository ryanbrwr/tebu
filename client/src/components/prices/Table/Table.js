import React, { useState, useEffect } from "react"
import axios from "axios"
import "./table.scss"
import { Bars } from "@agney/react-loading"
import Row from "./Row"

// logos
import BitcoinLogo from "../../../img/bitcoin.svg"
import EthereumLogo from "../../../img/ethereum.svg"
import LitecoinLogo from "../../../img/litecoin.svg"

const Table = () => {
  const [data, setData] = useState()
  const [initializing, setInitializing] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true"
      )
      .then((response) => {
        // handle success
        setData(response.data)
        if (initializing) setInitializing(false)
      })
      .catch((error) => {
        setError(true)
      })
    const intervalId = setInterval(() => {
      axios
        .get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true"
        )
        .then((response) => {
          setData(response.data)
          if (initializing) setInitializing(false)
        })
        .catch((error) => {
          setError(true)
        })
      if (initializing) setInitializing(false)
    }, 60000)

    return () => clearInterval(intervalId)
  }, [])

  if (initializing)
    return (
      <div className="tableContainer">
        <div className="tableWrapper">
          <Bars width="50" color="#d4d4d4" className="loadingIcon" />
        </div>
      </div>
    )
  if (error) {
    return (
      <div className="tableContainer">
        <div className="tableWrapper">
          <p className="errorText">Chart cannot be loaded at this time</p>
        </div>
      </div>
    )
  }
  if (data) {
    return (
      <div className="tableContainer">
        <div className="tableWrapper">
          <div className="table">
            <div className="tableHeader">
              <div className="tagContainer endRow">
                <p>Name</p>
              </div>
              <div className="tagContainer endMobile">
                <p>Price</p>
              </div>
              <div className="tagContainer noMobile">
                <p>24h Change</p>
              </div>
              <div className="tagContainer noMobile">
                <p>24h Volume</p>
              </div>
              <div className="tagContainer noMobile">
                <p>Market Cap</p>
              </div>
            </div>
            <Row
              data={data.bitcoin}
              name="Bitcoin"
              ticker="BTC"
              icon={BitcoinLogo}
            />
            <Row
              data={data.ethereum}
              name="Ethereum"
              ticker="ETH"
              icon={EthereumLogo}
            />
            <Row
              data={data.litecoin}
              name="Litecoin"
              ticker="LTC"
              icon={LitecoinLogo}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Table
