import React, { useState } from "react";
import styles from "./index.module.css";
import Pokemon from "../../assets/pokemon1.svg";

type PokemonDataType = {
  name: string;
  attack: number;
  defense: number;
  types: string[];
  image: string;
};
type PokemonCardProps = {
  pokemon: PokemonDataType;
};
export const PokemonCard = ({pokemon}: PokemonCardProps) => {
  return (
    <div key={pokemon.name} className={styles.pokemonCard}>
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
            <div key={type}>{type}</div>
          ))}
        </div>
      </article>
      <img src={Pokemon} />
    </div>
  );
};
