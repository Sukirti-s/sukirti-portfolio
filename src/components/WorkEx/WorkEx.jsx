import React, { useState } from "react";

import styles from "./WorkEx.module.css";
import history from "../../data/WorkEx.json";
import { getImageUrl } from "../../utils";


export const WorkEx = () => {

const [modal, setModal] = useState(null);

const openModal = (historyItem) => {
    setModal(historyItem); // set selected history item
  };

const closeModal = () => {
    setModal(null);
  };
  
  return (
    
    <section className={styles.container} id="workex">
      <h2 className={styles.title}>Work Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>

                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}`}</h3>
                  <h4>{`${historyItem.organisation}`}</h4>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                </div>

                <button className={styles.viewDetailsBtn} onClick={() => openModal(historyItem)}>
                    View Details
                </button>

                {/* Modal */}

                {modal && (
                  <div className={styles.modalOverlay}>
                    <div className={styles.modalContainer} onClick={closeModal}>
                      <div className={styles.modalItemDetails}>
                        <h3>{`${modal.organisation}`}</h3>
                        <ul>
                          {modal.experiences.map((experience, id) => {
                            return <li className={styles.modalhistoryli} key={id}>{experience}</li>;
                          })}
                        </ul>
                        <div className={styles.buttonCenter}>
                          <button className={styles.viewDetailsBtn} onClick={closeModal}>
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};