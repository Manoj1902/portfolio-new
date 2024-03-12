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
        <h3 className={styles.greet}>Hello There !</h3>
        <h3 className={styles.greet}>
          I'm <span>Manoj Kumar</span>
        </h3>
        <h1 className={styles.title}>Frontend Developer & Android Developer</h1>
        <p className={styles.description}>
          Welcome! I'm a Frontend and Android developer passionate about
          crafting captivating user experiences. With expertise in sleek web and
          mobile interfaces, I deliver innovative solutions that exceed
          expectations. <br /> Let's bring your digital dreams to life!
        </p>
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
