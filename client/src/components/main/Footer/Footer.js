import React from "react"
import { Link as RouterLink } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"

import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa"

import "./footer.scss"

const Footer = (props) => (
  <footer className={`footerContainer ${props.purple ? "purple" : ""}`}>
    <div className="footerWrapper">
      <div className="footerLinkContainer">
        <div className="footerLinkWrapper">
          <div className="footerLinkItems">
            <h1 className={`footerLinkTitle ${props.purple ? "purple" : ""}`}>
              Markets
            </h1>
            <a
              className={`footerLink ${props.purple ? "purple" : ""}`}
              target="_blank"
              href="https://pro.coinbase.com/"
            >
              Coinbase Pro
            </a>
            <a
              className={`footerLink ${props.purple ? "purple" : ""}`}
              target="_blank"
              href="https://www.kraken.com"
            >
              Kraken
            </a>
          </div>
          <div className="footerLinkItems">
            <h1 className={`footerLinkTitle ${props.purple ? "purple" : ""}`}>
              Learn
            </h1>
            <RouterLink
              className={`footerLink ${props.purple ? "purple" : ""}`}
              to="/signin"
            >
              Browse assets
            </RouterLink>
            <RouterLink
              className={`footerLink ${props.purple ? "purple" : ""}`}
              to="/signin"
            >
              Where is my API key?
            </RouterLink>
            <RouterLink
              className={`footerLink ${props.purple ? "purple" : ""}`}
              to="/signin"
            >
              What is Bitcoin?
            </RouterLink>
            <RouterLink
              className={`footerLink ${props.purple ? "purple" : ""}`}
              to="/signin"
            >
              Schedule investments
            </RouterLink>
          </div>
        </div>
        <div className="footerLinkWrapper">
          <div className="footerLinkItems">
            <h1 className={`footerLinkTitle ${props.purple ? "purple" : ""}`}>
              Company
            </h1>
            <RouterLink
              className={`footerLink ${props.purple ? "purple" : ""}`}
              to="/about"
            >
              About
            </RouterLink>
            <RouterLink
              className={`footerLink ${props.purple ? "purple" : ""}`}
              to="/faq"
            >
              FAQ
            </RouterLink>
            <RouterLink
              className={`footerLink ${props.purple ? "purple" : ""}`}
              to="/signin"
            >
              Legal & Privacy
            </RouterLink>
          </div>
          <div className="footerLinkItems">
            <h1 className={`footerLinkTitle ${props.purple ? "purple" : ""}`}>
              Support
            </h1>
            <RouterLink
              className={`footerLink ${props.purple ? "purple" : ""}`}
              to="/signin"
            >
              Contact Us
            </RouterLink>
            <RouterLink
              className={`footerLink ${props.purple ? "purple" : ""}`}
              to="/signin"
            >
              Pricing and fees
            </RouterLink>
            <RouterLink
              className={`footerLink ${props.purple ? "purple" : ""}`}
              to="/signin"
            >
              Create Account
            </RouterLink>
          </div>
        </div>
      </div>
      <section className="socialContainer">
        <div className="socialWrapper">
          <ScrollLink
            className={`socialLogo ${props.purple ? "purple" : ""}`}
            to="/"
          >
            tebu
          </ScrollLink>
          <small className={`websiteRights ${props.purple ? "purple" : ""}`}>
            tebu © {new Date().getFullYear()} All rights reserved.
          </small>
          <div className="socialIcons">
            <a
              className={`socialIconLink ${props.purple ? "purple" : ""}`}
              href="/"
              target="_blank"
              aria-label="FaceBook"
            >
              <FaFacebook />
            </a>
            <a
              className={`socialIconLink ${props.purple ? "purple" : ""}`}
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              className={`socialIconLink ${props.purple ? "purple" : ""}`}
              href="/"
              target="_blank"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              className={`socialIconLink ${props.purple ? "purple" : ""}`}
              href="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              className={`socialIconLink ${props.purple ? "purple" : ""}`}
              href="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  </footer>
)

export default Footer
