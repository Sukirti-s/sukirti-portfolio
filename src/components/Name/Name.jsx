import React from "react";

import styles from "./Name.module.css";
import { getImageUrl } from "../../utils";

export const Name = () => {
  return ( 

    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Sukirti</h1>
        <div>
          <h2 className={styles.description}>Associate Product Manager</h2>
        </div>
      </div>
    </section>
  );
};