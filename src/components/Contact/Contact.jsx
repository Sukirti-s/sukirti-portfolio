import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Connect with Me</h2><br />
        <p>
            <u>Available For -</u> <br /><br /> Full time opportunities in Product Management
        </p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("icons/Email.png")} alt="Email icon" />
          <a href="mailto:sukirti.s.26@gmail.com">sukirti.s.26@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("icons/Phone.png")} alt="Phone icon" />
          <p>+91-8454915659</p>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("icons/Linkedin.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sukirti-pmg/">https://www.linkedin.com/in/sukirti-pmg/</a>
        </li>
      </ul>
    </footer>
  );
};