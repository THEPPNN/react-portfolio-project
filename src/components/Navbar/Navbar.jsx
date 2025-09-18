import React, {useState} from "react";
import styles from "./Navber.module.css";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="#">PORTFOLIO</a>
          </div>
          <ul>
            <li>
              <a href="#">SKILLS</a>
            </li>
            <li>
              <a href="#">PROJECTS</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>

          <div className={styles.button}>
            <a href="#">Hire me</a>
          </div>
        </div>

        {/* mobile menu */}
        <FaBars onClick={handleOpen} className={styles.menu_icon} />
        {isOpen ? (
          <>
            <ul className={styles.mobile_menu}>
              <li>
                <a href="#">SKILLS</a>
              </li>
              <li>
                <a href="#">PROJECTS</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
            <div className={styles.mobile_button}>
              <a href="#">Hire me</a>
            </div>
          </>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
