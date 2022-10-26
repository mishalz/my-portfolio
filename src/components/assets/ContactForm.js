import React, { useRef } from "react";
import styles from "./ContactForm.module.css";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ContactForm = ({ icon }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gnv1yx4",
        "template_aql409r",
        form.current,
        "UXD6PoBXiBT_jBIiM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className={styles["contact-form"]}>
      <h1>
        Email Me
        <FontAwesomeIcon className={styles.icon} icon={icon} />
      </h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles["contact-input"]}>
          <label>Name</label>
          <input type="text" name="user_name" />
        </div>
        <div className={styles["contact-input"]}>
          <label>Email</label>
          <input type="email" name="user_email" />
        </div>
        <div className={styles["contact-input"]}>
          <label>Message</label>
          <textarea name="message" />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
