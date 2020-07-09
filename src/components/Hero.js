import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import { motion } from "framer-motion"
import { Parallax } from "react-parallax"
import greyDots from "../assets/grey_dots.svg"

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
    initial: { x: -800 },
    animate: {
      x: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const child = {
    initial: { x: -800 },
    animate: {
      x: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <motion.div variants={parent} initial="initial" animate="animate">
            <motion.div variants={child} className="underline" />
            <motion.h1 variants={child}>I'm Régis</motion.h1>
            <motion.h4 variants={child}>Front-end React Developer</motion.h4>
            <motion.div variants={child}>
              <Link to="/contact" className="btn">
                contact me
              </Link>
            </motion.div>
            <motion.div variants={child}>
              <SocialLinks variants={child} />
            </motion.div>
            {/* <div
              style={{
                position: "relative",
              }}
            >
              <Parallax
                bgImage={greyDots}
                bgImageAlt="circle field"
                strength={300}
                bgImageStyle={{
                  position: "absolute",
                  left: "10%",
                  top: "20%",
                  width: "500px",
                  height: "200px",
                  zoom: 0.5,
                }}
              >
                <div style={{ height: "20vh" }} />
              </Parallax>
            </div> */}
          </motion.div>
        </article>

        <Image fluid={fluid} className="hero-img"></Image>
      </div>

      <div className="custom-shape-divider-bottom-1593972317">
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
      </div>
    </header>
  )
}

export default Hero
