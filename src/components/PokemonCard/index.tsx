import React, { useState } from "react";
import styles from "./index.module.css";
import Pokemon from "../../assets/pokemon1.svg";

export const PokemonCard = () => {
  return (
    <div key={1} className={styles.pokemonCard}>
      <article>
        <h4>Quilava</h4>
        <div className={styles.stats}>
          <div className={styles.statusBig}>
            <div className={styles.statsValue}>419</div>
            <span>Attack</span>
          </div>
          <div className={styles.statusBig}>
            <div className={styles.statsValue}>419</div>
            <span>Defense</span>
          </div>
        </div>
        <div className={styles.statsInfo}>
          <div>Grass</div>
          <div>Poison</div>
        </div>
      </article>
      <img src={Pokemon} />
    </div>
  );
};
