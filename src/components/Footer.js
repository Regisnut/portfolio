import React from "react"
import SocialLinks from "../constants/socialLinks"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <p className="footer-menu">
          <Link to="/">Home |</Link>
          <Link to="projects"> Projects |</Link>
          <Link to="blog"> Blog |</Link>
          <Link to="about"> About |</Link>
          <Link to="contact"> Contact</Link>
        </p>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span> website</span> all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
