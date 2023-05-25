import React, { useState, useContext} from "react";
import styles from "./index.module.css";
import tinycolor from "tinycolor2";
import { PokemonDataType, typeColors } from "../PokemonCard";
import { ModalContext } from "../../context/Modal";


export const Modal = () => {
  const { selectedPokemon, setSelectedPokemon } = useContext(ModalContext);

  const onClose = () => {
    setSelectedPokemon(null);
  };

  if (!selectedPokemon) {
    return null;
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} style={{
            background: `linear-gradient(to bottom, ${tinycolor(
              selectedPokemon.color
            )
              .desaturate(5)
              .darken(35)
              .lighten(10)
              .toString()} 8%, 
                    ${tinycolor(selectedPokemon.color)
                      .darken(15)
                      .desaturate(40)
                      .lighten(20)
                      .toString()} 100%)`,
          }}>
        <div
          className={styles.imageContent}
          style={{
            background: `linear-gradient(to bottom, ${tinycolor(
              selectedPokemon.color
            )
              .desaturate(10)
              .darken(30)
              .lighten(15)
              .toString()} 8%, 
                    ${tinycolor(selectedPokemon.color)
                      .darken(15)
                      .desaturate(40)
                      .lighten(20)
                      .toString()} 100%)`,
          }}
        >
          <img src={selectedPokemon.imagem} />
          {selectedPokemon.types.map((type: string) => (
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
            <div className={styles.name}>{selectedPokemon.name}</div>
            <div className={styles.stylesRight}>
              <div className={styles.geration}>Generation 1</div>
              <div className={styles.experienceGeneration}>
                {selectedPokemon.experience}
              </div>
            </div>
          </div>
          <div className={styles.abilities}>
            <div>Abilities</div>
            <div className={styles.abilityRow}>
              {" "}
              {selectedPokemon.abilities.map((ability: any) => {
                return <div>{ability} </div>;
              })}
            </div>
          </div>
          <div className={styles.points}>
            <div>
              <div>Healthy Points</div>
              <div>
                <strong>{selectedPokemon.hp}</strong>
              </div>
              <div className={styles.healthPoints}></div>
            </div>
            <div>
              <div>Experience</div>
              <div>
                <strong>{selectedPokemon.experience}</strong>
              </div>
              <div className={styles.experience}></div>
            </div>
          </div>
          <div className={styles.statusPoints}>
            <div className={styles.statusBig}>
              <div className={styles.statsValue}>{selectedPokemon.defense}</div>
              <span>Defense</span>
            </div>
            <div className={styles.statusBig}>
              <div className={styles.statsValue}>{selectedPokemon.attack}</div>
              <span>Attack</span>
            </div>
            <div className={styles.statusBig}>
              <div className={styles.statsValue}>{selectedPokemon.specialAttack}</div>
              <span>Sp Attack</span>
            </div>
            <div className={styles.statusBig}>
              <div className={styles.statsValue}>{selectedPokemon.specialDefense}</div>
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
