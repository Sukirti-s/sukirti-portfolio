import React, {useRef} from "react";
import { getImageUrl } from "../../utils";
import styles from "./Projects.module.css";

import projects from "../../data/Projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

const sliderRef = useRef(null);

  const scrollAmount = 250; // adjust depending on your card width

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.container} id="projects">

      <h2 className={styles.title}>Projects</h2>

      <div className={styles.sliderwrapper}>
        
        <button className={styles.navleft} onClick={scrollLeft}>
          <img src={getImageUrl("icons/arrow-left-circle.svg")} alt="Prev" />
          </button>
        
        <div className={styles.slidercontainer} ref={sliderRef}>
          <div className={styles.cardslider}>
            {projects.map((project, id) => {
              return <ProjectCard key={id} project={project} />;
            })}
          </div>
        </div>
        
        <button className={styles.navright} onClick={scrollRight}>
          <img src={getImageUrl("icons/arrow-right-circle.svg")} alt="Next" />
        </button>

      </div>

    </section>
  );
};

// id="nextBtn" 
// id="prevBtn"