import React, { useState } from "react";
import styles from "./index.module.css";
import tinycolor from "tinycolor2";
import { PokemonDataType, typeColors } from "../PokemonCard";

type ModalProps = {
  pokemon: PokemonDataType;
  onClose: () => void;
};
export const Modal = ({ pokemon, onClose }: ModalProps) => {

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.imageContent}>
          <img src={pokemon.imagem} />
          {pokemon.types.map((type: string) => (
            <div
              key={type}
              className={styles.test}
              style={{ backgroundColor: typeColors[type] }}
            >
              {type}
            </div>
          ))}
        </div>
        <article>
          <div className={styles.top}>
            <div className={styles.name}>{pokemon.name}</div>
            <div className={styles.geration}>Generation 1</div>
            <div className={styles.experience}>{pokemon.experience}</div>
          </div>
          <div className={styles.abilities}>
            <div>Abilities</div>
            <div className={styles.abilityRow}>
              {" "}
              {pokemon.abilities.map((ability) => {
                return <div>{ability} </div>;
              })}
            </div>
          </div>
          <div className={styles.points}>
            <div>
              <div>Healthy Points</div>
              <div>
                <strong>{pokemon.hp}</strong>
              </div>
              <div className={styles.healthPoints}></div>
            </div>
            <div>
              <div>Experience</div>
              <div>
                <strong>{pokemon.experience}</strong>
              </div>
              <div className={styles.experience}></div>
            </div>
          </div>
          <div className={styles.statusPoints}>
            <div className={styles.statusBig}>
              <div className={styles.statsValue}>{pokemon.defense}</div>
              <span>Defense</span>
            </div>
            <div className={styles.statusBig}>
              <div className={styles.statsValue}>{pokemon.attack}</div>
              <span>Attack</span>
            </div>
            <div className={styles.statusBig}>
              <div className={styles.statsValue}>{pokemon.specialAttack}</div>
              <span>Sp Attack</span>
            </div>
            <div className={styles.statusBig}>
              <div className={styles.statsValue}>{pokemon.specialDefense}</div>
              <span>Sp Defense</span>
            </div> 
          </div>
        </article>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};
