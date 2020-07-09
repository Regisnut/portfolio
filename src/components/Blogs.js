import React, { useEffect } from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

export const Blogs = ({ blogs, title, showLink }) => {
  const animation = useAnimation()
  // inView is false by default
  const [blogsRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <div>
      <motion.section
        className="section"
        ref={blogsRef}
        animate={animation}
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
          },
          hidden: { opacity: 0, y: 72 },
        }}
      >
        <Title title={title} />
        <div className="section-center blogs-center">
          {blogs.map(blog => {
            return <Blog key={blog.id} {...blog} />
          })}
        </div>
        {showLink && (
          <Link to="/blog" className="btn center-btn">
            blog
          </Link>
        )}
      </motion.section>

      <section className="test">
        <div className="custom-shape-divider-bottom-1593971564">
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
      </section>
    </div>
  )
}
export default Blogs
