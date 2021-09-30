import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { IoMdMail } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import styles from "./LandingPage.module.css";


export default function LandingPage(){
  return (
    <div className={styles.landing}>
      <nav className={styles.navbar}>
        <div>
          <button>Theme</button>
        </div>
        <div className={styles.links}>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
      <div className={styles.title}>
        <h1>Hello, I'm Rocio!</h1>
        <h4>F u l l -  S t a c k - D e v</h4>
        <div className={styles.icons}>
          <a href="https://github.com/rocioregina" target="_blank" rel="noreferrer">
            <FaGithub size={70}/>
          </a>
          <a href="https://www.linkedin.com/in/rocio-regina-dev/" target="_blank" rel="noreferrer">
            <FaLinkedin size={70}/>
          </a>
          <a href="../../../public/rocioregina-resume.pdf" download>
            <FaFileDownload size={60}/>
          </a>
        </div>
      </div>
      <div className={styles.base}>
        <Link>
          <FaChevronDown size={50}/>
        </Link>
      </div>
    </div>
  )
}
