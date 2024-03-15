import React, { useId, useRef, useState } from "react";
import styles from "./Contact.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact(props) {
  const [messageSent, setMessageSent] = useState(false);

  const id = useId();
  const [inputName, setInputName] = useState(props?.value ?? "");
  const [inputEmail, setInputEmail] = useState(props?.value ?? "");
  const [inputMessage, setInputMessage] = useState(props?.value ?? "");

  const sent = () => {
    toast.success("Message Sending");
  };
  const notSent = () => {
    toast.warn("Please enter valid details");
    console.log(inputName);
  };

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
          setInputName("");
          setInputEmail("");
          setInputMessage("");
          setMessageSent(!false);
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
              id={id}
              type="text"
              value={inputName}
              onInput={(e) => setInputName(e.target.value)}
              placeholder="Full Name*"
              name="user_name"
              required
            />
            {/* <label>
              Email<span>*</span>
            </label> */}
            <input
              id={id}
              type="email"
              value={inputEmail}
              onInput={(e) => setInputEmail(e.target.value)}
              placeholder="Your Email Address*"
              name="user_email"
              required
            />
            {/* <label>
              Message<span>*</span>
            </label> */}
            <textarea
              id={id}
              name="message"
              value={inputMessage}
              onInput={(e) => setInputMessage(e.target.value)}
              placeholder="Let's talk..."
              required
            />
            <button
              className={styles.submitBtn}
              type="submit"
              value="Send"
              onClick={messageSent ? sent : notSent}
            >
              Send
            </button>
            {messageSent ? <ToastContainer /> : <ToastContainer />}
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
                <a href="https://github.com/Manoj1902" target="_blank">
                  girthub/manoj1902
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
