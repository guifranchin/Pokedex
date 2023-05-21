import React, { useState } from "react";
import styles from "./index.module.css";

export const PokemonCard = () => {
  
  return (
   
        <div className={styles.pokemonList}>
            <div key={1} className={styles.pokemonCard}>
              <h4>Guilhere</h4>
              <p>Type: Fogo</p>
              <p>Attack: Fogo</p>
              <p>Defense: Macaco</p>
            </div>
        </div>
  )
};
