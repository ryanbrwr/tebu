import React, { useEffect, useState } from "react"
import "./navbar.scss"

import { FaBars } from "react-icons/fa"
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md"
import { Link as RouterLink } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"

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
    <nav className={`navContainer ${scrollNav ? "scrollNav" : ""}`}>
      <div className="navContentContainer">
        <div className="leftMenu">
          <RouterLink to="/" className={`logo ${scrollNav ? "scrollNav" : ""}`}>
            tebu
          </RouterLink>
          <ul className="navMenuContainer">
            <li className="navMenuItem">
              <RouterLink
                to="/about"
                className={`navLink ${scrollNav ? "scrollNav" : ""}`}
              >
                About
              </RouterLink>
            </li>
            <li className="navMenuItem">
              <ScrollLink
                to="schedule"
                className={`navLink ${scrollNav ? "scrollNav" : ""}`}
              >
                Help
              </ScrollLink>
            </li>
            <li className="navMenuItem">
              <RouterLink
                to="/about"
                className={`navLink ${scrollNav ? "scrollNav" : ""}`}
              >
                Contact
              </RouterLink>
            </li>
          </ul>
        </div>

        <div
          className={`menuIcon ${scrollNav ? "scrollNav" : ""}`}
          onClick={props.toggleSidebar}
        >
          <FaBars />
        </div>

        {!props.user ? (
          <div className="rightMenu">
            <RouterLink
              to="/signin"
              className={`navLink disappearOnMobile ${
                scrollNav ? "scrollNav" : ""
              }`}
            >
              Sign in
            </RouterLink>
            <nav className="navButton">
              <RouterLink
                className={`button ${scrollNav ? "primary" : "outline"}`}
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                to="/signup"
              >
                Get started{" "}
                {hover ? (
                  <MdArrowForward className="arrowForward" />
                ) : (
                  <MdKeyboardArrowRight className="arrowRight" />
                )}
              </RouterLink>
            </nav>
          </div>
        ) : (
          <nav className="navButton">
            <RouterLink
              className={`button ${scrollNav ? "primary" : "outline"}`}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              to="/dashboard"
            >
              Dashboard{" "}
              {hover ? (
                <MdArrowForward className="arrowForward" />
              ) : (
                <MdKeyboardArrowRight className="arrowRight" />
              )}
            </RouterLink>
          </nav>
        )}
      </div>
    </nav>
  )
}

export default Navbar
