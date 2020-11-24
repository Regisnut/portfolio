import React, { useState } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { motion } from "framer-motion"
import new_message from "../assets/new_message.svg"
import {
  FaArrowRight
} from 'react-icons/fa';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact() {

  const [showModal, setShowModal] = useState(false)

  const closeModal = () => {
    setShowModal(false)
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


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      text: ""
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'This name is too short!')
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      text: Yup.string()
        .min(2, 'THis text is Too Short!')
        .max(150, 'Must be 150 characters or less')
        .required('Required'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {

      fetch("/?no-cache=1", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values }),
      })
        .then(() => {
          setShowModal(true),
            console.log("state", { ...values })
          setSubmitting(false)
          resetForm()
        })
        .catch(error => alert(error))


    },
  })


  return (
    <Layout>
      <SEO
        title="Contact"
        description="Let's get in touch with my contact form for any web project"
      />
      <section className="contact-page">
        <article className="contact__aside">
          <img src={new_message} alt="new_message" />
          <div className="contact__details">
            <h1>Contact</h1>

            <h3>Connect with us</h3>
            <div className="underline" />
            <p>Please leave a message, I&#39;d like to know more about your project.</p>
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
            // onSubmit={handleSubmit}
            onSubmit={formik.handleSubmit}
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-group">
              <input
                // required
                type="text"
                placeholder="name"
                className="form-control"
                name="name"
                // value={name}
                // onChange={event => {
                //   setName(event.target.value)
                // }}

                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
              ) : null}
              <input
                // required
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
                // onChange={event => {
                //   setEmail(event.target.value)
                // }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
              <textarea
                // required
                name="text"
                id=""
                rows="5"
                placeholder="your message"
                className="form-control"
                // value={text}
                // onChange={event => {
                //   setText(event.target.value)
                // }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.text}
              />
              {formik.touched.text && formik.errors.text ? (
                <div>{formik.errors.text}</div>
              ) : null}
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
