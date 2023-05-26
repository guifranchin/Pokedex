import { createContext, useEffect, useState, useContext } from "react";
import { get } from "../api/pokeApi";
import PokemonContext from "./PokemonContext";
export type DropDownItems = {
  [type: string]: { [item: string]: boolean };
};

export type DropDownContextProps = {
  dropDownItems: DropDownItems;
  setDropDownItems: React.Dispatch<React.SetStateAction<DropDownItems>>;
  selectedTypes: string[];
  setSelectedTypes: React.Dispatch<React.SetStateAction<string[]>>;
  selectedAttacks: string[];
  setSelectedAttacks: React.Dispatch<React.SetStateAction<string[]>>;
  selectedExperience: string[];
  setSelectedExperience: React.Dispatch<React.SetStateAction<string[]>>;
};

type DropDownContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUES = {
  dropDownItems: {
    Tipo: {
      Fire: false,
      Normal: false,
      Electric: false,
      Water: false,
    },
    Ataque: {
      "Low Attack": false,
      "Medium Attack": false,
      "High Attack": false,
    },
    Experiencia: {
      "Low Experience": false,
      "Medium Experience": false,
      "High Experience": false,
    },
  },
  setDropDownItems: () => [],
  selectedTypes: [],
  setSelectedTypes: () => [],
  selectedAttacks: [],
  setSelectedAttacks: () => [],
  selectedExperience: [],
  setSelectedExperience: () => [],
} as DropDownContextProps;

export const DropDownContext =
  createContext<DropDownContextProps>(DEFAULT_VALUES);

export const DropDownContextProvider = ({
  children,
}: DropDownContextProviderProps) => {
  const [dropDownItems, setDropDownItems] = useState<DropDownItems>({});
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedAttacks, setSelectedAttacks] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  
  const { setPokemonCards } = useContext(PokemonContext);

  const fetchTypePokemon = async () => {
    const { results } = await get("type") as any;

    const dropDownItems = results.reduce((acc: any, type: any) => {
      acc[type.name] = false;
      return acc;
    }, {});
    
    setDropDownItems({
      Tipo: {...dropDownItems},
      Ataque: {...DEFAULT_VALUES.dropDownItems.Ataque},
      Experiencia: {...DEFAULT_VALUES.dropDownItems.Experiencia},
    });
  };

  useEffect(() => {
    fetchTypePokemon();
  }, []);

  const fetchPokemonByType = async (type: any) => {
    const { pokemon } = await get(`/type/${type}`) as any;
    const pokemonPromises = pokemon.map(async ({ pokemon }: any) => {
      const pokemonDetails = await get(pokemon.url) as any;

      return {
        name: pokemonDetails.name,
        attack: pokemonDetails.stats.find((stat: any) => stat.stat.name === 'attack')?.base_stat,
        defense: pokemonDetails.stats.find((stat: any) => stat.stat.name === 'defense')?.base_stat,
        types: pokemonDetails.types.map((type: any) => type.type.name),
        imagem: pokemonDetails.sprites.other["official-artwork"].front_default,
      };
    });

    const pokemonData = await Promise.all(pokemonPromises);
    setPokemonCards((prevPokemons) => [...prevPokemons, ...pokemonData]);
  };

  useEffect(() => {
    const currentSelectedTypes = selectedTypes;
    
      setPokemonCards([]);
      currentSelectedTypes.forEach(fetchPokemonByType);
  
  }, [selectedTypes]);

  return (
    <DropDownContext.Provider
      value={{
        dropDownItems,
        setDropDownItems,
        selectedTypes,
        setSelectedTypes,
        selectedAttacks,
        setSelectedAttacks,
        selectedExperience,
        setSelectedExperience,
      }}
    >
      {children}
    </DropDownContext.Provider>
  );
};
