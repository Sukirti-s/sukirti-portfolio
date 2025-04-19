import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>About Me</h1>
        <div>
            <p className={styles.description}>
            A product manager with 2.5+ years of experience in software ERP solutions and implementation of Agile Framework and Software Development Life Cycle (SDLC) to ensure efficient delivery of solutions to resolve business problems. Collaborated with high-performing cross-functional teams to design, develop, and enhance product features across diverse domains, including Travel and Supply Chain ERP systems.
            </p>
        </div>
      </div>
      <img
        src={getImageUrl("./67416.jpg")}
        alt="Image of me"
        className={styles.aboutImg}
      />
      {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
    </section>
  );
};
