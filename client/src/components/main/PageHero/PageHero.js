import React from "react"
import "./pageHero.scss"

const AboutHero = (props) => (
  <div className="aboutHeroContainer">
    <div className="aboutHeroWrapper">
      <h1 className="aboutHeroTitle">{props.pageTitle}</h1>
    </div>
  </div>
)

export default AboutHero
