import React, { useRef } from "react";
import styles from "./Contact.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pm07wcj", "template_hkv53fe", form.current, {
        publicKey: "aVbVOiRory4gqMmtT",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.infoContainer}>
        <div className={styles.formContainer}>
          <h3>Hire Me</h3>
          <p>Stay Chill and Tell Your Plan</p>
          <form ref={form} onSubmit={sendEmail}>
            {/* <label>
              Name<span>*</span>
            </label> */}
            <input
              type="text"
              placeholder="Full Name*"
              name="user_name"
              required
            />
            {/* <label>
              Email<span>*</span>
            </label> */}
            <input
              type="email"
              placeholder="Your Email Address*"
              name="user_email"
              required
            />
            {/* <label>
              Message<span>*</span>
            </label> */}
            <textarea name="message" placeholder="Let's talk..." required />
            <input className={styles.submitBtn} type="submit" value="Send" />
          </form>
        </div>
        <div className={styles.myInfo}>
          <h3>My Info</h3>
          <div className={styles.location}>
            <FaLocationDot className={styles.locationIcon} />
            <div className={styles.locationInfo}>
              <div className={styles.locationName}>
                <span>Location: </span>
                <p>Mehrauli, New Delhi</p>
              </div>
              <div className={styles.locationName}>
                <span>Country: </span>
                <p>India</p>
              </div>
            </div>
          </div>
          <h3 style={{ marginTop: "25px" }}>Links</h3>
          <div className={styles.link}>
            <FaLink className={styles.linkIcon} />
            <div className={styles.linkInfo}>
              <div className={styles.linkName}>
                <span>Email: </span>
                <a href="mailto:dev.manojkumar19@gmail.com">
                  dev.manojkumar19@gmail.com
                </a>
              </div>
              <div className={styles.linkName}>
                <span>Mobile: </span>
                <a href="tel:+919818609640">(+91)-9818609640</a>
              </div>
              <div className={styles.linkName}>
                <span>GitHub: </span>
                <a href="tel:+919818609640">(+91)-9818609640</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
