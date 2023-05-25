import { useContext } from "react";
import styles from "./index.module.css";
import { DropDown } from "../DropDown";
import { PokemonCard } from "../PokemonCard";
import { SearchBar } from "../SearchBar";
import PokemonContext from "../../context/PokemonContext";
import { DropDownContext } from "../../context/DropDownContext";
import { SearchBarContext } from "../../context/SearchBarContext";
export const HomeMenu = () => {
  const { searchBar } = useContext(SearchBarContext);
  const { pokemonCards, count } = useContext(PokemonContext);
  const { selectedAttacks, selectedExperience } =
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

  const filteredPokemonCards = pokemonCards.filter((pokemon) => {
    const meetsNameCriteria = pokemon.name
      .toLowerCase()
      .includes(searchBar.toLowerCase());
    // const meetsTypeCriteria =
    //   selectedTypes.length === 0 ||
    //   pokemon.types.some((type) => selectedTypes.includes(type));
    const meetsAttackCriteria =
      selectedAttacks.length === 0 ||
      selectedAttacks.includes(getAttackCategory(pokemon.attack));
    const meetsExperienceCriteria =
      selectedExperience.length === 0 ||
      selectedExperience.includes(getExperienceCategory(pokemon.experience));

    return (
      // meetsTypeCriteria &&
      meetsAttackCriteria &&
      meetsExperienceCriteria &&
      meetsNameCriteria
    );
  });


  return (
    <section className={styles.sectionContainer}>
      <div>
        <p>
          {count} <strong>Pokemons</strong> for you to choose your
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
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      </main>
    </section>
  );
};
