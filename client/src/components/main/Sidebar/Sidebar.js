import React from "react"
import "./sidebar.scss"

import { FaTimes } from "react-icons/fa"
import { Link as RouterLink } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"

const Sidebar = (props) => {
  console.log(props.sidebarIsOpen)
  return (
    <aside className={`sidebarContainer ${props.sidebarIsOpen ? "open" : ""}`}>
      <div className="sidebarTopRow">
        <h1 className="logo scrollNav">tebu</h1>
        <div className="iconContainer" onClick={props.toggleSidebar}>
          <FaTimes className="closeIcon" />
        </div>
      </div>
      <div className="sidebarContentContainer">
        <div className="loginSidebarMenu">
          <RouterLink className="sidebarButtonText" to="/signup">
            Get Started
          </RouterLink>
          <RouterLink className="sidebarButtonText outline" to="/signup">
            Sign in
          </RouterLink>
        </div>
        <div className="pagesSidebarMenu">
          <RouterLink className="sidebarButtonText outline" to="/about">
            About
          </RouterLink>
          <RouterLink className="sidebarButtonText outline" to="/prices">
            Prices
          </RouterLink>
          <RouterLink className="sidebarButtonText outline" to="/about">
            Help
          </RouterLink>
          <RouterLink className="sidebarButtonText outline" to="/about">
            Contact
          </RouterLink>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
