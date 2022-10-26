import React, { useRef } from "react";
import classes from "./css/Page.module.css";
import styles from "./css/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faPhone,
  faCircleUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import ContactForm from "../components/assets/ContactForm";

const Contact = () => {
  return (
    <div className={classes.page} id={styles.contact}>
      <ContactForm icon={faAddressBook} />
      <div className={styles["contact-options"]}>
        <h1>
          My Socials
          <FontAwesomeIcon className={styles.icon} icon={faCircleUser} />
        </h1>
        <a
          href="https://web.facebook.com/profile.php?id=100008711256013"
          target="_blank"
          className={styles["contact-icons"]}
        >
          <FontAwesomeIcon icon={faFacebook} /> Mishal Zulfiqar
        </a>

        <div className={styles["contact-icons"]}>
          <FontAwesomeIcon icon={faPhone} /> +923482592354
        </div>
        <div className={styles["contact-icons"]}>
          <FontAwesomeIcon icon={faEnvelope} /> Mishal.zulfiqar2911@gmail.com
        </div>
        <a
          href="https://github.com/mishalz"
          target="_blank"
          className={styles["contact-icons"]}
        >
          <FontAwesomeIcon icon={faGithub} /> Mishalz{" "}
        </a>
        <a
          href="https://www.linkedin.com/in/mishal-zulfiqar"
          target="_blank"
          className={styles["contact-icons"]}
        >
          <FontAwesomeIcon icon={faLinkedin} /> Mishal Zulfiqar{" "}
        </a>
      </div>
    </div>
  );
};

export default Contact;
