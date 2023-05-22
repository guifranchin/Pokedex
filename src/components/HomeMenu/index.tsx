import React, { useContext, useState } from "react";
import styles from "./index.module.css";
import { DropDown } from "../DropDown";
import { PokemonCard } from "../PokemonCard";
import { SearchBar } from "../SearchBar";
import PokemonContext from "../../context/PokemonContext";


export const HomeMenu = () => {
  const { pokemonCards } = useContext(PokemonContext);

  return (
    <section className={styles.sectionContainer}>
      <div>
        <p>
          {pokemonCards.length} <strong>Pokemons</strong> for you to choose your favorite
        </p>
      </div>
      <main className={styles.main}>
        <SearchBar />
        <div className={styles.formRadius}>
          <DropDown type="Tipo" />
          <DropDown type="Ataque" />
          <DropDown type="Experiencia" />
        </div>
        <div className={styles.pokemonList}>
          {pokemonCards.map(pokemon => <PokemonCard />)}
        </div>
      </main>
    </section>
  );
};
