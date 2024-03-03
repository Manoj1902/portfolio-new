import React from "react";
import styles from "./About.module.css";
import { RiCodeBoxLine } from "react-icons/ri";
import { MdOutlineDeveloperMode } from "react-icons/md";

function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="./images/about.png"
          alt="about"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <RiCodeBoxLine className={styles.iconImg} />
            <div className={styles.aboutItemText}>
              <h3>UI/Frontend Developer</h3>
              <p>
                As a UI/Frontend Developer, I specialize in crafting visually
                captivating and user-friendly interfaces that seamlessly merge
                form with function.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <MdOutlineDeveloperMode className={styles.iconImg} />
            <div className={styles.aboutItemText}>
              <h3>Android Developer</h3>
              <p>
                As an Android Developer, I focus on building innovative and
                robust mobile applications that harness the full potential of
                the Android platform.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
