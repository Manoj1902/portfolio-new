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
      <div className={styles.socialIcons}>
        <a href="">
          <FaGithub />
        </a>
        <a href="">
          <FaLinkedin />
        </a>
        <a href="">
          <FaInstagramSquare />
        </a>
        <a href="">
          <FaFacebookSquare />
        </a>
        <a href="">
          <FaSquareXTwitter />
        </a>
        <a href="">
          <FaWhatsappSquare />
        </a>
      </div>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}

export default Hero;
