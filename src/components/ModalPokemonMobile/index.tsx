import React, { useEffect, useContext } from "react";
import styles from "./index.module.css";
import { ModalContext } from "../../context/Modal";
import { useMediaQuery } from "react-responsive";
import { typeColors } from "../PokemonCard";
import tinycolor from "tinycolor2";
import { styled } from "styled-components";

export const ModalPokemonMobile = ({ onClose, pokemon }: any) => {
  const { selectedPokemon, setSelectedPokemon } = useContext(ModalContext);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const ModalContent = styled.div`
    border-radius: 10px;
    position: relative;
    padding-top: 50px;
    padding-bottom: 30px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    background: ${`linear-gradient(to bottom, ${tinycolor(
      selectedPokemon.color
    )
      .desaturate(5)
      .darken(15)
      .lighten(20)
      .toString()} 8%, 
    ${tinycolor(selectedPokemon.color)
      .darken(15)
      .desaturate(40)
      .lighten(20)
      .toString()} 100%)`};
    &::after {
      content: "";
      position: absolute;
      top: 35%;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${`linear-gradient(to bottom, ${tinycolor(
        selectedPokemon.color
      )
        .desaturate(5)
        .darken(25)
        .lighten(5)
        .toString()} 8%, 
      ${tinycolor(selectedPokemon.color)
        .darken(15)
        .desaturate(40)
        .lighten(20)
        .toString()} 100%)`};
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
    }
  `;

  return (
    <div className={styles.modalOverlay}>
      <ModalContent>
        <div className={styles.modalContent}>
          <main>
            <div className={styles.name}>{selectedPokemon.name}</div>
            <img src={selectedPokemon.imagem} />
            <div className={styles.stats}>
              <div className={styles.statsLeft}>
                {" "}
                <div className={styles.experienceGeneration}>
                  {selectedPokemon.experience}
                </div>
                <div className={styles.geration}>Generation 1</div>
              </div>
              <div className={styles.statsRight}>
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
            </div>
            <div className={styles.info}>
              <div className={styles.abilities}>
                <div>Abilities</div>
                <div className={styles.abilityRow}>
                  {" "}
                  {selectedPokemon.abilities.map(
                    (ability: string, index: any) => {
                      return <div key={index}>{ability} </div>;
                    }
                  )}
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
                  <div className={styles.statsValue}>
                    {selectedPokemon.defense}
                  </div>
                  <span>Defense</span>
                </div>
                <div className={styles.statusBig}>
                  <div className={styles.statsValue}>
                    {selectedPokemon.attack}
                  </div>
                  <span>Attack</span>
                </div>
                <div className={styles.statusBig}>
                  <div className={styles.statsValue}>
                    {selectedPokemon.specialAttack}
                  </div>
                  <span>Sp Attack</span>
                </div>
                <div className={styles.statusBig}>
                  <div className={styles.statsValue}>
                    {selectedPokemon.specialDefense}
                  </div>
                  <span>Sp Defense</span>
                </div>
              </div>
            </div>
          </main>
          <button className={styles.closeButton} onClick={onClose}>
            X
          </button>
        </div>
      </ModalContent>
    </div>
  );
};
