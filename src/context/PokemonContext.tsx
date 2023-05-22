import { createContext, useState } from "react";
type PokemonCard = {
  name: string;
  attack: number;
  defense: number;
  types: string[];
  image: string;
};

export type PokemonContextProps = {
  pokemonCards: PokemonCard[];
  setPokemonCards: React.Dispatch<React.SetStateAction<PokemonCard[]>>;
};

type PokemonContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUES = {
  pokemonCards: [],
  setPokemonCards: () => [{}],
} as PokemonContextProps;

export const PokemonContext =
  createContext<PokemonContextProps>(DEFAULT_VALUES);

export const PokemonContextProvider = ({
  children,
}: PokemonContextProviderProps) => {
  const [pokemonCards, setPokemonCards] = useState<PokemonCard[]>([]);

  return (
    <PokemonContext.Provider value={{ pokemonCards, setPokemonCards }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
