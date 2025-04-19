import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/Projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">

      <h2 className={styles.title}>Projects</h2>

      <div className={styles.sliderwrapper}>
        <button className={styles.nav} id="prevBtn">‹</button>
        
        <div className={styles.slidercontainer}>
          <div className={styles.cardslider}>
            {projects.map((project, id) => {
              return <ProjectCard key={id} project={project} />;
            })}
          </div>
        </div>
        
        <button className={styles.nav} id="nextBtn">›</button>
      </div>

    </section>
  );
};