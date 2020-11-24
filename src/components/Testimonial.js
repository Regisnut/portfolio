import React, {useState, useEffect} from 'react'
import Title from '../components/Title'

import icon_next from "../assets/icon-next.svg"
import icon_prev from "../assets/icon-prev.svg"
import pattern_bg from "../assets/pattern-bg.svg"
import patternquotes from "../assets/pattern-quotes.svg"

import lucas from "../assets/lucas.jpeg"
import nobo from "../assets/nobo.jpg"
import {motion} from "framer-motion"

const customers = [
    {
name : "Lucas Finchelstein",
 quote : "Regis has delivered a great professional work, wich was in line with the expectations, and the work has been delivered on time as required.",
    title : "CEO Koikil",
        image : <img src={lucas} className ="image__review" loading="lazy" alt="Lucas koikil"/>
},
    {
name : "Jean-Baptiste Guthertz",
 quote : "Regis has done serious work in our company, and was willing to provide a quality service.",
    title : "CTO Nobo France",
        image : <img src={nobo} className ="image__review" loading="lazy" alt="Jean-Baptiste Nobo"/>
    }
]

const Testimonial = ({title}) => {

   const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = customers.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index])

  
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
   const review = {
    initial: { opacity : 0 },
    animate: {
      opacity : 1 ,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    exit:{opacity:0}
  }
  
    return(
        <section className="section">
            <Title title={title}/>
            <div className="section-center testimonial">

         

           <main className="container"  variants={parent} initial="initial" animate="animate">

        
<article className="slider-container">
     <img className="pattern" src={pattern_bg} alt="pattern_bg"/>
<motion.div variants={review} className="image">
   {customers[index] && customers[index].image}
</motion.div>
<div className="navigation">
    <motion.img src={icon_prev} alt="icon-prev" whileHover={{ scale: 1.2, transition :{duration:0.5} }}  onClick={() => setIndex(index - 1)}/>
    <motion.img src={icon_next} alt="icon-next" whileHover={{ scale: 1.2,transition :{duration:0.3} }}   onClick={() => setIndex(index + 1)}/>
</div>
</article>
<article className="feedback">
    <img src={patternquotes} alt="pattern-quotes"/>
    <motion.p variants={review} >{customers[index] && customers[index].quote}</motion.p>
    <motion.h4 variants={review}  className="name">{customers[index] && customers[index].name}</motion.h4>
    <motion.span  variants={review}  className="role">{customers[index]&& customers[index].title}</motion.span>
    <motion.i variants={review} className="count__review">({index+1}/{customers.length})</motion.i>

</article>
           </main>


            
            </div>
        </section>
    )
}

export default Testimonial
