import React, { useState } from "react";
import styles from "./index.module.css";
import { DropDown } from "../DropDown";
import { PokemonCard } from "../PokemonCard";
import { SearchBar } from "../SearchBar";

export const HomeMenu = () => {
  return (
    <section className={styles.sectionContainer}>
      <div>
        <p>
          {800} <strong>Pokemons</strong> for you to choose your favorite
        </p>
      </div>
      <main className={styles.main}>
        <SearchBar />
        <div className={styles.formRadius}>
          <DropDown />
          <DropDown />
          <DropDown />
        </div>
        <div className={styles.pokemonList}>
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </div>
      </main>
    </section>
  );
};




const dropDownData = [
  {
    Fire: false,
    Normal: false,
    Electric: false,
    Water: false,
  },
  {
    Grass: false,
    Ice: false,
    Fighting: false,
    Psychic: false,
  },
  {
    Bug: false,
    Ghost: false,
    Dark: false,
    Dragon: false,
  },
];

const pokemonCardData = [
  {
    name: "Quilava",
    attack: 419,
    defense: 419,
    types: ["Grass", "Poison"],
    image: "Pokemon",
  },
  {
    name: "Pikachu",
    attack: 500,
    defense: 500,
    types: ["Electric"],
    image: "Pokemon",
  },
  {
    name: "Bulbasaur",
    attack: 300,
    defense: 350,
    types: ["Grass", "Poison"],
    image: "Pokemon",
  },
  {
    name: "Charmander",
    attack: 400,
    defense: 350,
    types: ["Fire"],
    image: "Pokemon",
  },
];
