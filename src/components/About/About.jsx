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
                I build websites & web applications that are optimized best to
                the client's requirements and are scalable for future needs.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <MdOutlineDeveloperMode className={styles.iconImg} />
            <div className={styles.aboutItemText}>
              <h3>Android Developer</h3>
              <p>
                I build Android apps natively or with shared codebase (using
                WebView-based techs) that never fails on users' device.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
