import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, result, challenges},
}) => {
  return (
    <div className={styles.container}>

      <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image}/>

      <h3 className={styles.title}>{title}</h3>

      <p className={styles.description}>{description}</p>

      <div className={styles.skills}>
      <p className={styles.skill}>{result}</p>
      </div>

      <div className={styles.skills}>
      <p className={styles.skill}>{challenges}</p>
      </div>

    </div>
  );
};