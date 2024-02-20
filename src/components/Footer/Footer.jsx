import React from "react";
import styles from "./Footer.module.css";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer" className={styles.container}>
      <div className={styles.title}>
        <h2>Contact</h2>
        <p>Feel Free to react out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <MdEmail className={styles.linkImg} />
          <a href="mailto:raj.manoj34@gmail.com">Raj.manoj34@gmail.com</a>
        </li>
        <li className={styles.link}>
          <FaGithub className={styles.linkImg} />
          <a href="https://github.com/Manoj1902">github.com/Manoj1902</a>
        </li>
        <li className={styles.link}>
          <FaLinkedin className={styles.linkImg} />
          <a href="https://www.linkedin.com/in/manoj1902/">
            linkedin.com/manoj1902
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
