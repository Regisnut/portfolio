import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { motion } from "framer-motion"
import greyDots from "../assets/grey_dots.svg"
import circlePink from "../assets/circlePink.svg"
const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const parent = {
    initial: { y: 200, opacity : 0 },
    animate: {
      y: 0,
      opacity : 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const child = {
    initial: { y: 200, opacity : 0 },
    animate: {
      opacity : 1 ,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }


  
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (<>
    <header className="hero">

      <div className="section-center hero-center">
        <article className="hero-info">
          <motion.div variants={parent} initial="initial" animate="animate">
            <motion.div variants={child} className="underline" />
            <motion.h1 variants={child}>Hi, I'm Régis</motion.h1>
            <motion.h4 variants={child}>Front-End React Developer</motion.h4>
 <motion.h2 variants={child}>BUILDING DIGITAL <br/>PRODUCTS, BRANDS, AND <br/>EXPERIENCE</motion.h2>
  <motion.h5 variants={child}>I SPECIALIZE IN WEB APP DEVELOPMENT, AND RESPONSIVE WEB DESIGN</motion.h5>

            <motion.div variants={child}>
              <Link to="/contact" className="btn">
                contact me
              </Link>
            </motion.div>
            <motion.div variants={child}>
              <SocialLinks  />
            </motion.div>
            <motion.img  variants={child} className="hero-dots" src={greyDots} alt="greyDots" />
          </motion.div>
        </article>
        <Image fluid={fluid} className="hero-img"/>
      </div>

 <img  className = "hero-circlePink" src={circlePink} alt="circlePink" />
{/* item scroll */}
    <motion.a href="#services" variants={parent} initial="initial" animate="animate" className="hero-scroll">
      <motion.p variants={child}>scroll</motion.p>
      <motion.span variants={child}/>
    </motion.a>
    {/* bar */}
    {/* <aside  className="hero-vertical">
        <span/>
        <p>Paris - France - Digital Experience</p>
         <span/>
    </aside> */}

    </header>
    
{/* divider */}
      {/* <div className="custom-shape-divider-bottom-1593972317">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          />
        </svg>
      </div> */}
      </>
  )
}

export default Hero;
