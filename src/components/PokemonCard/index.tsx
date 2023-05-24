import React, { useState } from "react";
import styles from "./index.module.css";
import tinycolor from "tinycolor2";
import { Modal } from "../Modal";

export const typeColors: { [key: string]: string } = {
  steel: "#AIAIAI",
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
  electric: "#C54545",
  fire: "#F76545",
  fighting: "#F76545",
  dragon: "#F76545",
  normal: "#76AADB",
};

export type PokemonDataType = {
  name: string;
  attack: number;
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
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const openModal = (pokemon: any) => {
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
          .desaturate(30)
          .lighten(20)
          .toString()} 33.5%)`,
      }}
      onClick={() => openModal(pokemon)}
    >
      {selectedPokemon && (
        <Modal onClose={() => {
          setSelectedPokemon(null)}} pokemon={pokemon} />
      )}
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
