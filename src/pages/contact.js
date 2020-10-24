import React, { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { motion } from "framer-motion"
import new_message from "../assets/new_message.svg"
import {
FaArrowRight
} from 'react-icons/fa';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact({ setPositionRef }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")
  const [showModal, setShowModal] = useState(false)

  // handleSubmit with Netlify form
  const handleSubmit = async event => {
    event.preventDefault()
    const formDetails = { name, email, text }

    fetch("/?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formDetails }),
    })
      .then(setShowModal(true), console.log("state", { ...formDetails }))
      .catch(error => alert(error))
  }

  const closeModal = () => {
    setShowModal(false)
    setName("")
    setEmail("")
    setText("")
  }

  const child = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (
    <Layout>
      <SEO
        title="Contact"
        description="Let's get in touch with my contact form for any web project"
      />
      <section className="contact-page">
<article className="contact__aside">
  <img src={new_message} alt="new_message"/>
  <div className="contact__details">
    <h1>Contact</h1>
   
    <h3>Connect with us</h3>
     <div className="underline"/>
    <p>Please leave a message, I'd like to know more about your project.</p>
  <div className="round__icon"> 
  <FaArrowRight className="social-icon rotate" />
  </div>

  </div>
</article>

        <motion.article
          className="contact-form "
          variants={child}
          initial="initial"
          animate="animate"
        >
          <h3>get in touch</h3>
          <h4>Have a project or want to talk?</h4>
          <form
            name="contact"
            onSubmit={handleSubmit}
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <input
                required
                type="text"
                placeholder="name"
                className="form-control"
                name="name"
                value={name}
                onChange={event => {
                  setName(event.target.value)
                }}
              />
              <input
                required
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
                onChange={event => {
                  setEmail(event.target.value)
                }}
              />
              <textarea
                required
                name="text"
                id=""
                rows="5"
                placeholder="your message"
                className="form-control"
                value={text}
                onChange={event => {
                  setText(event.target.value)
                }}
              />
            </div>
            <button type="submit" className="submit-btn btn">
              Send
            </button>
            {/* modal */}
            {showModal ? (
              <>
                <div className="modal-contact">
                  <p>
                    <span role="img" aria-label="merci">
                      🙏🏻
                    </span>{" "}
                    Many thanks for your message,
                    <br /> I will reply shortly.
                  </p>
                  <button
                    aria-label="close modal"
                    onClick={closeModal}
                    className="btn submit-btn"
                  >
                    OK
                  </button>
                </div>
                <div className="modal-background"></div>
              </>
            ) : (
              ""
            )}
          </form>
        </motion.article>

      </section>
    </Layout>
  )
}
