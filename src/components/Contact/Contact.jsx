import React from "react";
import styles from "./Contact.module.css";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.infoContainer}>
        <div className={styles.formContainer}>
          <h3>Hire Me</h3>
          <p>Stay Chill and Tell Your Plan</p>
          <form>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input className={styles.submitBtn} type="submit" value="Send" />
          </form>
        </div>
        <div className={styles.myInfo}>
          <h3>My Info</h3>
          <div className={styles.location}>
            <FaLocationDot className={styles.locationIcon} />
            <div className={styles.locationInfo}>
              <div className={styles.locationName}>
                <h3>Location: </h3>
                <p>Mehrauli, New Delhi</p>
              </div>
              <div className={styles.locationName}>
                <h3>Country: </h3>
                <p>India</p>
              </div>
            </div>
          </div>
          <div className={styles.links}>
            <h1>Links</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
