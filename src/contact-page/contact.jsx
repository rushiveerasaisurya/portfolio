import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";
import doodle from "../assets/doodle.svg";
import { delay, motion } from "framer-motion"; 
function Contact() {
  const formRef = useRef();
  const [error,setError]=useState(false);
  const [success,setSuccess]=useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gl6epgb', 'template_3khilqb', formRef.current, {
        publicKey: 'wG1vLoqqrRHJPYl1U',
      })
      .then(
        (result) => {
          setSuccess(true); 
          formRef.current.reset(); 
          alert("Message sent successfully!");
        },
        (error) => {
          setError(true);
          alert("Failed to send message. Please try again.");
        },
      );
  };
  const headingVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10, delay:0.2 }
    }
  };

  const leftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10, delay:0.2}
    }
  };

  const rightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10, delay:0.2 }
    }
  };

  return (
    <div id='contact-me' className="section contact">
      <motion.p
        className="contact-bg"
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.5 }}
        variants={headingVariants}
      >
        CONTACT ME
      </motion.p>
      <div className="bar"></div>
      <div className="contact-container">
        <motion.div
          className="content"
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.5 }}
          variants={leftVariants}
        >
          <div className="text-section">
            <h2 className="title">Let's talk!</h2>
            <p className="description">Send us a message</p>
          </div>
          <img src={doodle} alt="Doodle" className="image" />
        </motion.div>

        <motion.form
          className="form"
          noValidate
          ref={formRef}
          onSubmit={sendEmail}
          initial="hidden"
          whileInView="visible"
          viewport={{amount: 0.5 }}
          variants={rightVariants}
        >
          <motion.div
            className="form-group"
            variants={rightVariants}
          >
            <label htmlFor="name" className="label">Full name</label>
            <input id="name" type="text" placeholder="" className="input" name="name" required />
          </motion.div>
          <motion.div
            className="form-group"
            variants={rightVariants}
          >
            <label htmlFor="email" className="label">Email</label>
            <input id="email" type="email" placeholder="" className="input" name="email" required />
          </motion.div>
          <motion.div
            className="form-group"
            variants={rightVariants}
          >
            <label htmlFor="message" className="label">Message</label>
            <textarea id="message" rows="3" className="textarea" name="message" required></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className="button"
            variants={rightVariants}
          >
            Send Message
          </motion.button>
          {error && <motion.p className="error-message" variants={rightVariants}>Failed to send message. Please try again.</motion.p>}
          {success && <motion.p className="success-message" variants={rightVariants}>Message sent successfully!</motion.p>}
        </motion.form>
      </div>
    </div>
  );
}
export default Contact;
