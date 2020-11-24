import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import LanguageMenu from '../components/languageMenu'

const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "about",
  },
  {
    id: 3,
    text: "projects",
    url: "projects",
  },
  {
    id: 4,
    text: "blog",
    url: "blog",
  },
  {
    id: 5,
    text: "contact",
    url: "contact",
  },
  // {
  //   id : 6,
  //   language : <LanguageMenu/>
  // }
]

 const parent = {
    initial: { y: 20, opacity : 0 },
    animate: {
      y: 0,
      opacity : 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }
  const child = {
    initial: { y: 20, opacity : 0 },
    animate: {
      opacity : 1 ,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

const tempLinks = data.map(link => {



  return (
    <motion.li variants={child} key={link.id}>
      {link.id !== 6 ?
      <Link to={link.url}>{link.text}</Link> :
       link.language
}
    </motion.li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <motion.ul variants={parent} initial="initial" animate="animate" className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </motion.ul>
  )
}
