import React, { useState } from "react";
import styles from "./index.module.css";
import { DropDown } from "../DropDown";
import { PokemonCard } from "../PokemonCard";



export const HomeMenu = () => {
  const [searchTerm, setSearchTerm] = useState<any>("");
  const [selectedTypes, setSelectedTypes] = useState<any>({});

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleTypeChange = (e: any) => {
    const { name, checked } = e.target;
    setSelectedTypes((prev: any) => ({ ...prev, [name]: checked }));
  };

  const [isOpen, setIsOpen] = useState<any>(false);
  const [selected, setSelected] = useState<any>({
    Fire: false,
    Normal: false,
    Electric: false,
    Water: false,
  });


  const toggleSelection = (type: any) =>
    setSelected({ ...selected, [type]: !selected[type] });

  return (
    <section className={styles.sectionContainer}>
      <div>
        <h3>
          800 <strong>Pokemons</strong> for you to choose your favorite
        </h3>
      </div>
      <main className={styles.main}>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="encuentra tu pokémon..."
            // value={searchTerm}
            // onChange={handleSearchChange}
          />
        </form>
        <div className={styles.formRadius}>
        <DropDown/>
        <DropDown/>
        <DropDown/>
        </div>
        <div className={styles.pokemonList}>
          <PokemonCard />
     
        
        </div>
      </main>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Welcome to Pokedex</h1>
      <HomeMenu />
      <footer>
        <p>Make with ♥ for the PokéSpartans team Platzi Master</p>
        <p>Our Team</p>
      </footer>
    </div>
  );
};
