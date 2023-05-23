import { createContext, useEffect, useRef, useState } from "react";
import { get, listPokemon } from "../api/pokeApi";
export type PokemonCardProps = {
  name: string;
  attack: number;
  defense: number;
  experience: number;
  types: string[];
  imagem: string;
};

export type PokemonContextProps = {
  pokemonCards: PokemonCardProps[];
  setPokemonCards: React.Dispatch<React.SetStateAction<PokemonCardProps[]>>;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
};

type PokemonContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUES = {
  pokemonCards: [],
  setPokemonCards: () => [{}],
  offset: 0,
  setOffset: () => [0],
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
  
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const fetchPokemonData = async (offset: number) => {
    const pokemonList = await listPokemon(offset);

    const pokemonDataPromises = pokemonList.results.map(async (pokemon: any) => {
      const pokemonData = await get(pokemon.url);

      const name = pokemonData.name;
      const attack = pokemonData.stats.find((stat: any) => stat.stat.name === 'attack')?.base_stat;
      const defense = pokemonData.stats.find((stat: any) => stat.stat.name === 'defense')?.base_stat;
      const experience = pokemonData.base_experience;
      const types = pokemonData.types.map((type: any) => type.type.name);
      const imagem = pokemonData.sprites.other["official-artwork"].front_default;

      return { name, attack, defense, experience, types, imagem };
    });

    const newPokemonData = await Promise.all(pokemonDataPromises);

    setPokemonCards((oldPokemonData) => [...oldPokemonData, ...newPokemonData]);
  };

  useEffect(() => {
    fetchPokemonData(offset);
  }, [offset]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { 
        setOffset((prevOffset) => prevOffset + 20);
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
      value={{ pokemonCards, setPokemonCards, offset, setOffset }}
    >
      {children}
      <div
        // ref={loadMoreRef}
        // style={{ height: '1px', backgroundColor: "blue"}}
      >TESTEEEEEEEEEEEEEEEEEE </div>
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
