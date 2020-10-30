import React from "react"
import SocialLinks from "../constants/socialLinks"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer">

<div className="footer__container">

<div className="footer__left">
  <h3>Front-End Developer</h3>
  <h4>Web Design</h4>
  <h4>Web Development</h4>
  <h4>App Design</h4>
   <div className="underline"/>
</div>

<div className="footer__right">
   
     <Link to="/">
       <h4 className="footer__right__link"> 
         Home
         </h4>
       </Link>
          <Link to="projects">
            <h4 className="footer__right__link">Projects
              </h4>
          </Link>
          <Link to="blog"> 
                 <h4 className="footer__right__link">
                   Blog
                   </h4></Link>
          <Link to="about">
                   <h4 className="footer__right__link">
                    About 
                   </h4>
             </Link>
          <Link to="contact"> 
                 <h4 className="footer__right__link">
                   Contact
                   </h4></Link>
                    <div className="underline"/>
</div>

 <SocialLinks styleClass="footer-links" />

</div>

      <div>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span> website</span> all rights reserved
        </h4>
      </div>

    </footer>
  )
}

export default Footer
