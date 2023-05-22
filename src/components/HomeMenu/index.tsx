import React, { useContext, useState } from "react";
import styles from "./index.module.css";
import { DropDown } from "../DropDown";
import { PokemonCard } from "../PokemonCard";
import { SearchBar } from "../SearchBar";
import PokemonContext from "../../context/PokemonContext";
import { DropDownContext } from "../../context/DropDownContext";
export const HomeMenu = () => {
  const { pokemonCards } = useContext(PokemonContext);
  const { selectedTypes, selectedAttacks, selectedExperience } =
    useContext(DropDownContext);

  const getAttackCategory = (attack: number): string => {
    if (attack < 50) return "Low Attack";
    if (attack < 100) return "Medium Attack";
    return "High Attack";
  };

  const getExperienceCategory = (experience: number): string => {
    if (experience < 50) return "Low Experience";
    if (experience < 100) return "Medium Experience";
    return "High Experience";
  };

  console.log("Selected types: ", selectedTypes);
  console.log("Selected attacks: ", selectedAttacks);
  console.log("Selected experience: ", selectedExperience);
  
  const filteredPokemonCards = pokemonCards.filter((pokemon) => {
    const meetsTypeCriteria = selectedTypes.length === 0 || pokemon.types.some((type) => selectedTypes.includes(type));
    const meetsAttackCriteria = selectedAttacks.length === 0 || selectedAttacks.includes(getAttackCategory(pokemon.attack));
    const meetsExperienceCriteria = selectedExperience.length === 0 || selectedExperience.includes(getExperienceCategory(pokemon.experience));
    
    console.log(`Pokemon ${pokemon.name} meets type criteria: ${meetsTypeCriteria}`);
    console.log(`Pokemon ${pokemon.name} meets attack criteria: ${meetsAttackCriteria}`);
    console.log(`Pokemon ${pokemon.name} meets experience criteria: ${meetsExperienceCriteria}`);
    
    return meetsTypeCriteria && meetsAttackCriteria && meetsExperienceCriteria;
  });
  
  console.log("Filtered Pokemon: ", filteredPokemonCards);

  return (
    <section className={styles.sectionContainer}>
      <div>
        <p>
          {pokemonCards.length} <strong>Pokemons</strong> for you to choose your
          favorite
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
          {filteredPokemonCards.map((pokemon) => (
            <PokemonCard pokemon={pokemon} />
          ))}
        </div>
      </main>
    </section>
  );
};
