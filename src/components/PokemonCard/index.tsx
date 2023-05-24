import React, { useState } from "react";
import styles from "./index.module.css";
import tinycolor from "tinycolor2";

type PokemonDataType = {
  name: string;
  attack: number;
  specialAttack: number;
  defense: number;
  specialDefense: number;
  experience: number;
  types: string[];
  color: string;
  imagem: string;
  abilities: string[]
};

type PokemonCardProps = {
  pokemon: PokemonDataType;
};
export const PokemonCard = ({pokemon}: PokemonCardProps) => {

  return (
    <div key={pokemon.name} className={styles.pokemonCard} style={{
      background: `linear-gradient(to right, white 33.5%, ${tinycolor(pokemon.color)
        .darken(10)
        .desaturate(30)
        .lighten(20)
        .toString()} 33.5%)`,
    }}>
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
 
        <img src={pokemon.imagem} />
   
    </div>
  );
};
