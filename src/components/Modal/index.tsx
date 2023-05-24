import React, { useState } from "react";
import styles from "./index.module.css";
import tinycolor from "tinycolor2";
import { PokemonDataType, typeColors } from "../PokemonCard";
type ModalProps = {
  pokemon: PokemonDataType;
  onClose: () => void;
};
export const Modal = ({ pokemon, onClose }: ModalProps) => {
  console.log(pokemon.abilities);
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.imageContent}>
          <img src={pokemon.imagem} />
          {pokemon.types.map((type: string) => (
            <div key={type} className={styles.test} style={{ backgroundColor: typeColors[type] }}>
              {type}
            </div>
          ))}
        </div>
        <article></article>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};
