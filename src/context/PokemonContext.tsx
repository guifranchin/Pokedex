import { createContext, useState } from "react";
export type PokemonCardProps = {
  name: string;
  attack: number;
  defense: number;
  types: string[];
  image: string;
};

export type PokemonContextProps = {
  pokemonCards: PokemonCardProps[];
  setPokemonCards: React.Dispatch<React.SetStateAction<PokemonCardProps[]>>;
};

type PokemonContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUES = {
  pokemonCards: [
    {
      name: "Quilava",
      attack: 419,
      defense: 419,
      types: ["Grass", "Poison"],
      image: "Pokemon",
    },
  
  ],
  setPokemonCards: () => [{}],
} as PokemonContextProps;

export const PokemonContext =
  createContext<PokemonContextProps>(DEFAULT_VALUES);

export const PokemonContextProvider = ({
  children,
}: PokemonContextProviderProps) => {
  const [pokemonCards, setPokemonCards] = useState<PokemonCardProps[]>([]);

  return (
    <PokemonContext.Provider value={{ pokemonCards, setPokemonCards }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
