import React from "react"
import "./pageContent.scss"

const MissionSection = (props) => (
  <div className={`missionContainer ${props.small ? "small" : ""}`}>
    <div className="missionWrapper">
      <h2 className="missionHeader">{props.header}</h2>
      <p className="missionDescription">{props.description}</p>
    </div>
  </div>
)

export default MissionSection
