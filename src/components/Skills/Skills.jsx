import React from "react";

import styles from "./Skills.module.css";
import skills from "../../data/Skills.json";
import { getImageUrl } from "../../utils";


export const Skills = () => {
  return (
    
    <section className={styles.container} id="skills">

      <h2 className={styles.title}>Skills</h2>

      <div className={styles.content}>
        <ul className={styles.history}>
          {skills.map((skills, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                <h3>Core Skills</h3>
                  <ul>
                    {skills.coreskill.map((coreskill, id) => {
                      return <li className={styles.historyli} key={id}>{coreskill}</li>;
                    })}
                  </ul>
                </div>
              </li>
              
            );
          })}
          {skills.map((skills, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <div className={styles.historyItemDetails}>
                <h3>Tech Skills</h3>
                  <ul>
                    {skills.techskill.map((techskill, id) => {
                      return <li className={styles.historyli} key={id}>{techskill}</li>;
                    })}
                  </ul>
                </div>
              </li>
              
            );
          })}
        </ul>
      </div>
    </section>
  );
};