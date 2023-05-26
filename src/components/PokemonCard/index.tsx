import  { useContext } from "react";
import styles from "./index.module.css";
import tinycolor from "tinycolor2";

import { ModalContext } from "../../context/Modal";
import { PokemonCardProps, typeColors } from "../../models/models";


export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { setSelectedPokemon } = useContext(ModalContext);

  const openModal = () => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div
      key={pokemon.name}
      className={styles.pokemonCard}
      style={{
        background: `linear-gradient(to right, white 33.5%, ${tinycolor(
          pokemon.color
        )
          .darken(10)
          .desaturate(20)
          .lighten(20)
          .toString()} 33.5%)`,
      }}
      onClick={() => openModal()}
    >
      <article>
        <h4>{pokemon.name}</h4>
        <div className={styles.stats}>
          <div className={styles.statusBig}>
            <div className={styles.statsValue}>{pokemon.attack}</div>
            <span>Attack</span>
          </div>
          <div className={styles.statusBig}>
            <div className={styles.statsValue}>{pokemon.defense}</div>
            <span>Defense</span>
          </div>
        </div>
        <div className={styles.statsInfo}>
          {pokemon.types.map((type: string) => (
            <div key={type} style={{ backgroundColor: typeColors[type] }}>
              {type}
            </div>
          ))}
        </div>
      </article>

      <img src={pokemon.imagem} />
    </div>
  );
};
