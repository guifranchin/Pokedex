import  { useContext } from "react";
import styles from "./index.module.css";
import tinycolor from "tinycolor2";

import { ModalContext } from "../../context/Modal";

export const typeColors: { [key: string]: string } = {
  stile: "#AIAIAI",
  dark: "#AIAIAI",
  rock: "#AIAIAI",
  poison: "#A974BC",
  psychic: "#A974BC",
  fairy: "#A974BC",
  ghost: "#A974BC",
  grass: "#70A83B",
  bug: "#70A83B",
  ground: "#9B897B",
  ice: "#A2CFF0",
  water: "#A2CFF0",
  electric: "#F76545",
  fire: "#F76545",
  fighting: "#F76545",
  dragon: "#F76545",
  normal: "#76AADB",
  gosth: "#76AADB",
};

export type PokemonDataType = {
  name: string;
  attack: number;
  hp: number;
  specialAttack: number;
  defense: number;
  specialDefense: number;
  experience: number;
  types: string[];
  color: string;
  imagem: string;
  abilities: string[];
};

type PokemonCardProps = {
  pokemon: PokemonDataType;
};
export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { setSelectedPokemon, selectedPokemon } = useContext(ModalContext);

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
