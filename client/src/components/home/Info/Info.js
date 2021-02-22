import React from "react"
import { Link as RouterLink } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"
import "./info.scss"

const Info = (props) => {
  console.log(props.borderTop)
  return (
    <div
      className={`infoContainer ${props.lightBg ? "lightBg" : ""} ${
        props.borderTop ? "borderTop" : ""
      }`}
      id={props.id}
    >
      <div className="infoWrapper">
        <div className={`infoRow ${props.imgStart ? "imgStart" : ""}`}>
          <div className="columnOne">
            <div className="textWrapper">
              <p className="topLine">{props.topLine}</p>
              <h1 className={`header ${props.lightText ? "lightText" : ""}`}>
                {props.headline}
              </h1>
              <p
                className={`subtitle ${
                  props.darkDescriptionText ? "darkDescriptionText" : ""
                }`}
              >
                {props.description}
              </p>
              <div className="infoButtonWrapper">
                <ScrollLink
                  to="home"
                  smooth
                  duration={500}
                  spy
                  exact
                  offset={-80}
                  className={`button ${props.dark ? "dark" : ""} ${
                    props.primary ? "primary" : ""
                  } ${props.blue ? "blue" : ""}`}
                >
                  {props.buttonLabel}
                </ScrollLink>
              </div>
            </div>
          </div>
          <div className="columnTwo">
            <div className="infoImgWrapper">
              <img className="infoImg" src={props.img} alt={props.alt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
