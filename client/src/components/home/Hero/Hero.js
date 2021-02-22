import React, { useState } from "react"
import "./hero.scss"
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md"

import { Link as RouterLink } from "react-router-dom"

const Hero = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <div className="heroContainer" id="Home">
      <div className="heroBackground" />
      <div className="heroContentContainer">
        <h1 className="heroTitle">The Best Way to Buy Crypto</h1>
        <p className="heroDescription">
          Sign up today and get your first $100 of transactions with no fees.
        </p>
        <div className="buttonContainer">
          <RouterLink
            className="button primary"
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get started{" "}
            {hover ? (
              <MdArrowForward className="arrowForward" />
            ) : (
              <MdKeyboardArrowRight className="arrowRight" />
            )}
          </RouterLink>
        </div>
      </div>
    </div>
  )
}

export default Hero
