import React from "react";
import styles from "./Footer.module.css";
import { MdEmail } from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaMobileAlt,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer" className={styles.container}>
      <div className={styles.footerContent}>
        <div className={styles.footerAbout}>
          <a href="#home">
            <img src="./images/logo.svg" alt="" />
          </a>
          <ul className={styles.footerAboutSocial}>
            <li>
              <a href="">
                <FaGithub className={styles.socialLink} />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin className={styles.socialLink} />
              </a>
            </li>
            <li>
              <a href="">
                <FaFacebook className={styles.socialLink} />
              </a>
            </li>
            <li>
              <a href="">
                <FaSquareXTwitter className={styles.socialLink} />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerMyInfoLinks}>
          <h3>Reach me</h3>
          <ul>
            <li>
              <MdEmail className={styles.InfoLink} />
              <a href="mailto:dev.manojkumar19@gmail.com">
                dev.manojkumar19@gmail.com
              </a>
            </li>
            <li>
              <FaMobileAlt className={styles.InfoLink} />
              <a href="tel:+919818609640">(+91)-9818609640</a>
            </li>
            <li>
              <FaLocationDot className={styles.InfoLink} />
              <p>266J/1 Ward 2 Mehrauli, New Delhi - 110030</p>
            </li>
          </ul>
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.footerQuickLinks}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerServices}>
            <h3>Services</h3>
            <ul>
              <li>Android App Development</li>
              <li>UI/Frontend Web Development</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.cpyRight}>
        <p>Copyright © 2024 Manoj Kumar ®</p>

        <div className={styles.socialMediaIcons}>
          <a href="">
            <FaGithub className={styles.icon} />
          </a>
          <a href="">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="">
            <FaFacebook className={styles.icon} />
          </a>
          <a href="">
            <FaInstagramSquare className={styles.icon} />
          </a>
          <a href="">
            <FaWhatsappSquare className={styles.icon} />
          </a>
          <a href="">
            <FaSquareXTwitter className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
