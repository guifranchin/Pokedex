import { createContext, useEffect, useRef, useState } from "react";
import { get, listPokemon } from "../api/pokeApi";
export type PokemonCardProps = {
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
  abilities: string[]
};

export type PokemonContextProps = {
  pokemonCards: PokemonCardProps[];
  setPokemonCards: React.Dispatch<React.SetStateAction<PokemonCardProps[]>>;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

type PokemonContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUES = {
  pokemonCards: [],
  setPokemonCards: () => [{}],
  offset: 0,
  setOffset: () => [0],
  count: 0,
  setCount: () => [0],
} as PokemonContextProps;

export const PokemonContext =
  createContext<PokemonContextProps>(DEFAULT_VALUES);

export const PokemonContextProvider = ({
  children,
}: PokemonContextProviderProps) => {
  const [pokemonCards, setPokemonCards] = useState<PokemonCardProps[]>(
    DEFAULT_VALUES.pokemonCards
  );
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const fetchPokemonData = async (offset: number) => {
    const pokemonList = await listPokemon(offset);

    setCount(pokemonList.count);

    const pokemonDataPromises = pokemonList.results.map(
      async (pokemon: any) => {
        const pokemonData = await get(pokemon.url);

        const name = pokemonData.name;

        const specialAttack = pokemonData.stats.find(
          (stat: any) => stat.stat.name === "special-attack"
        )?.base_stat;

        const attack = pokemonData.stats.find(
          (stat: any) => stat.stat.name === "attack"
        )?.base_stat;

        const defense = pokemonData.stats.find(
          (stat: any) => stat.stat.name === "defense"
        )?.base_stat;

        const specialDefense = pokemonData.stats.find(
          (stat: any) => stat.stat.name === "special-defense"
        )?.base_stat;

        const hp = pokemonData.stats.find(
          (stat: any) => stat.stat.name === "hp"
        )?.base_stat;


        const experience = pokemonData.base_experience;

        const abilities = pokemonData.abilities.map((ability: any) => ability.ability.name);

        const types = pokemonData.types.map((type: any) => type.type.name);

        const specieUrl = pokemonData.species.url;

        const {color: specieColor} = await get(specieUrl)

        const imagem =
          pokemonData.sprites.other["official-artwork"].front_default;

        return { name, attack, hp, specialAttack, defense, specialDefense, experience, types, abilities,  imagem, ["color"]: specieColor.name };
      }
    );

    const newPokemonData = await Promise.all(pokemonDataPromises);

    setPokemonCards((prevPokemons) => [...prevPokemons, ...newPokemonData]);
  };

  useEffect(() => {
    fetchPokemonData(offset);
  }, [offset]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setOffset((prevOffset) => prevOffset + 9);
      }
    });

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemonCards,
        setPokemonCards,
        offset,
        setOffset,
        count,
        setCount
      }}
    >
      {children}
      <div ref={loadMoreRef} style={{ height: "1px" }}/>
    
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
