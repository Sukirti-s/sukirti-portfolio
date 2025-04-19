import React,{ useState } from "react";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar} id="/">
            <a className={styles.title} href="/">Portfolio</a>
            
            <div className={styles.menu}>

                <img className={styles.menuBtn} src={menuOpen? getImageUrl("icons/Cross.png") : getImageUrl("icons/menuBtn.png")} alt="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                />

                <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpens:""}`} onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#workex">Work Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/sukirti-pmg/"> <img className={styles.linkedin} src= {getImageUrl("icons/Linkedin.png")} alt="linkedin"/> </a>
                    </li>
                </ul>
                
            </div>

        </nav>
    );
    
};