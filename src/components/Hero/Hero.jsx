import React from "react";
import styles from "./Hero.module.css";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.hero_container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <div className={styles.text_1}>Hello, It's me</div>
            <div className={styles.text_2}>Naeng Pari</div>
            <div className={styles.text_3}>
              <span>I'm a</span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  " Full stack developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  " Web developer",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>
            <div className={styles.text_4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corrupti, eligendi!
            </div>
            <ul className={styles.hero_social}>
              <li>
                <a href="#">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLine />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.hero_img}></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
