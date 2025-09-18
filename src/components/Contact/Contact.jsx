import React from "react";
import styles from "./Contact.module.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className={styles.contact_wrapper}>
      <div className={styles.contact_container}>
        <div className={styles.contact_info}>
          <h3>Get in touch</h3>
          <p className={styles.contact_desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <p className={styles.contact_address}>
            1234567890, Bangkok, Thailand
          </p>
          <p>
            <FaPhone /> +66 81 234 5678
          </p>
          <p>
            <FaEnvelope /> naengpari@gmail.com
          </p>
        </div>

        <div className={styles.contact_form}>
          <form action="">
            <div className={styles.input_group}>
              <div>
                <label htmlFor="first name">Fisrt Name</label>
                <input type="text" placeholder="Enter your first name" />
              </div>

              <div>
                <label htmlFor="last name">Last Name</label>
                <input type="text" placeholder="Enter your last name" />
              </div>
            </div>

            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder="Enter your email address" />

            <label htmlFor="message">Your Message</label>
            <textarea placeholder="Type here..." cols="30" rows="10"></textarea>
            <button type="submit">Send Message</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};
