import React from "react";
import styles from "./Number.module.css";
import CountUp from "react-countup";

export const Number = () => {
  return (
    <div className={styles.number_con}>
      <div className={styles.number_items}>
        <h3>
          <CountUp
            start={0}
            end={100}
            duration={3}
            separator=","
            enableScrollSpy={true} // ✅ ไม่ต้องใช้ react-visibility-sensor แล้ว
          />
          +
        </h3>
        <p>Projects Delivered</p>
      </div>
      <div className={styles.number_items}>
        <h3>
          {" "}
          <CountUp
            start={0}
            end={40}
            duration={3}
            separator=","
            enableScrollSpy={true} // ✅ ไม่ต้องใช้ react-visibility-sensor แล้ว
          />
          +
        </h3>
        <p>Companies Helped</p>
      </div>
      <div className={styles.number_items}>
        <h3>
          {" "}
          <CountUp
            start={0}
            end={10}
            duration={3}
            separator=","
            enableScrollSpy={true} // ✅ ไม่ต้องใช้ react-visibility-sensor แล้ว
          />
          +
        </h3>
        <p>Years of Experience</p>
      </div>
      <div className={styles.number_items}>
        <h3>
          {" "}
          <CountUp
            start={0}
            end={200}
            duration={3}
            separator=","
            enableScrollSpy={true} // ✅ ไม่ต้องใช้ react-visibility-sensor แล้ว
          />
          +
        </h3>
        <p>Happy Clients</p>
      </div>
    </div>
  );
};
