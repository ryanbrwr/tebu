import React, { useEffect, useState } from "react"
import "./navbar.scss"

import { FaBars } from "react-icons/fa"
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md"
import { Link as RouterLink } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"

import fire from "../../../fire"

const Navbar = (props) => {
  const [hover, setHover] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <nav className={`dashNavContainer ${scrollNav ? "scrollNav" : ""}`}>
      <div className="dashNavContentContainer">
        <div className="leftMenu">
          <RouterLink to="/dashboard" className="logo scrollNav">
            tebu
          </RouterLink>
        </div>

        <div className="menuIcon" onClick={props.toggleSidebar}>
          <FaBars />
        </div>
        <div className="rightMenu">
          <RouterLink to="/signin" className="dashNavLink">
            Home
          </RouterLink>
          <RouterLink to="/signin" className="dashNavLink">
            My Plans
          </RouterLink>
          <a
            className="dashNavLink"
            onClick={() => {
              fire.auth().signOut()
            }}
          >
            Logout
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
