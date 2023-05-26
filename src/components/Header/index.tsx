import styles from "./index.module.css";
import Logo from "../../assets/Logo.svg";
import Hamburguer from "../../assets/BurgenBtn.svg";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <header
      className={`${styles.headerContainer} ${
        isMobile && showMenu ? styles.expanded : ""
      }`}
    >
      <section
        className={`${styles.section} ${
          isMobile && showMenu ? styles.column : ""
        }`}
      >
        <img
          src={Logo}
          alt="Logo"
          className={`${styles.img} ${
            isMobile && showMenu ? styles.column : ""
          }`}
        />
        {isMobile ? (
          <div className={styles.mobileHeader}>
            {!showMenu && (
              <button className={styles.hamburger} onClick={toggleMenu}>
                <img src={Hamburguer} alt="Menu" />
              </button>
            )}
          </div>
        ) : (
          ""
        )}

        <nav
          className={`${styles.nav} ${
            isMobile && showMenu ? styles.column : ""
          }`}
        >
          <div
            className={`${styles.menu} ${
              isMobile ? (showMenu ? styles.show : styles.hide) : ""
            }`}
          >
            <a className={styles.button}> 
              <NavLink to="/" onClick={closeMenu} className={styles.link} >Home</NavLink>
            </a>
            <a className={styles.button}>
              {" "}
              <NavLink to="/pokedex" onClick={closeMenu} className={styles.link}>Pokédex</NavLink>
            </a>
            <a className={styles.button}>Legendaries</a>
            <a className={styles.button} ><NavLink to="https://pokeapi.co/" className={styles.link}>Documentation</NavLink></a>
          </div>
        </nav>
      </section>
    </header>
  );
};
