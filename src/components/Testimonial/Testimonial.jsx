import React from 'react'
import styles from './Testimonial.module.css'

export const Testimonial = () => {
  return (
    <div className={styles.testimonial_con}>
        <h3 className={styles.testimonial_title}>Testimonials</h3>
        <div className={styles.testimonial_list}>
            <div className={styles.testimonial_items}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <img src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h4>Jane Doe</h4>
                <p className={styles.bio}>Web Developer</p>
            </div>
            <div className={styles.testimonial_items}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h4>Jane Doe</h4>
                <p className={styles.bio}>Web Developer</p>
            </div>
            <div className={styles.testimonial_items}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=922&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h4>Jane Doe</h4>
                <p className={styles.bio}>Web Developer</p>
            </div>
        </div>
    </div>
  )
}
