import React from "react";
import styles from "./Hero.module.css";
import { FaGithub, FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.socialIcons}>
        <a href="https://github.com/Manoj1902">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/manoj1902/">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/lakra_manoj0/">
          <FaInstagramSquare />
        </a>
        <a href="https://www.facebook.com/shmanoj1902/">
          <FaFacebookSquare />
        </a>
        <a href="https://twitter.com/ManojK1902">
          <FaSquareXTwitter />
        </a>
        <a href="https://api.whatsapp.com/send?phone=919818609640&text=Hi%2C%20I%20wanted%20to%20work%20with%20you">
          <FaWhatsappSquare />
        </a>
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi</h1>
        <p className={styles.description}>I am Android Developer</p>
        <div className={styles.heroBtns}>
          <a className={styles.contactBtn} href="#contact">
            Contact Me
          </a>
          <a className={styles.contactBtn} href="#resume">
            Download CV
          </a>
        </div>
      </div>
      <img
        src="./images/profile.png"
        alt="profile-image"
        className={styles.heroImg}
      />

      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}

export default Hero;
