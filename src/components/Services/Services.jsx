import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaPaintBrush, FaDesktop } from 'react-icons/fa'

function Services() {
  return (
    <div className={styles.services_con}>
        <h3 className={styles.services_title}>My Services</h3>
        <div className={styles.services_list}>
            <div className={styles.services_items}>
                <FaCode />
                <h4>Web Development</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>
            <div className={styles.services_items}>
                <FaPaintBrush />
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>
            <div className={styles.services_items}>
                <FaDesktop />
                <h4>Database</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>
        </div>
    </div>
  )
}

export default Services