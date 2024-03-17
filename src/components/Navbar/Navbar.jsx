import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  function handleClicked() {
    setClicked(!clicked);
  }

  return (
    <nav className={`${styles.navbar}`}>
      <a href="#home">
        <img src="./images/logo.svg" alt="logo" className={styles.logo} />
      </a>
      <div className={styles.menu}>
        <div className={styles.menuIcon} onClick={handleClicked}>
          {clicked ? <IoClose /> : <IoMenu />}
        </div>
        <ul
          className={`${styles.menuItems} ${clicked && styles.menuOpen}`}
          onClick={() => setClicked(false)}
        >
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
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
