import React from 'react'
import styles from './Skills.module.css'

import { SiPhp } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function Skills() {
  return (
    <div className={styles.skills_con}>
        <h3 className={styles.skills_title}>My Skill Set</h3>
        <ul className={styles.skills_list}>
            <li>
                <SiPhp />
            </li>
            <li>
                <FaNode />
            </li>
            <li>
                <FaJsSquare />
            </li>
            <li>
                <FaVuejs />
            </li>
            <li>
                <FaReact />
            </li>
        </ul>
    </div>
  )
}

export default Skills