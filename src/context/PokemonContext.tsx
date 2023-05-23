import { createContext, useEffect, useState } from "react";
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
};

type PokemonContextProviderProps = {
  children: React.ReactNode;
};

const DEFAULT_VALUES = {
  pokemonCards: [
    // {
    //   name: "Charmander",
    //   attack: 52,
    //   defense: 43,
    //   experience: 62,
    //   types: ["Fire"],
    //   image: "CharmanderImage",
    // },
    // {
    //   name: "Ivysaur",
    //   attack: 62,
    //   defense: 63,
    //   experience: 142,
    //   types: ["Grass", "Poison"],
    //   image: "IvysaurImage",
    // },
    // {
    //   name: "Blastoise",
    //   attack: 83,
    //   defense: 100,
    //   experience: 239,
    //   types: ["Water"],
    //   image: "BlastoiseImage",
    // },
    // {
    //   name: "Pikachu",
    //   attack: 55,
    //   defense: 40,
    //   experience: 112,
    //   types: ["Electric"],
    //   image: "PikachuImage",
    // },
    // {
    //   name: "Jigglypuff",
    //   attack: 45,
    //   defense: 20,
    //   experience: 95,
    //   types: ["Normal", "Fairy"],
    //   image: "JigglypuffImage",
    // },
    // {
    //   name: "Gengar",
    //   attack: 65,
    //   defense: 60,
    //   experience: 225,
    //   types: ["Ghost", "Poison"],
    //   image: "GengarImage",
    // },
    // {
    //   name: "Arcanine",
    //   attack: 110,
    //   defense: 80,
    //   experience: 180,
    //   types: ["Fire"],
    //   image: "ArcanineImage",
    // },
    // {
    //   name: "Scyther",
    //   attack: 110,
    //   defense: 80,
    //   experience: 100,
    //   types: ["Bug", "Flying"],
    //   image: "ScytherImage",
    // },
    // {
    //   name: "Gyarados",
    //   attack: 125,
    //   defense: 79,
    //   experience: 218,
    //   types: ["Water", "Flying"],
    //   image: "GyaradosImage",
    // },
    // {
    //   name: "Eevee",
    //   attack: 55,
    //   defense: 50,
    //   experience: 65,
    //   types: ["Normal"],
    //   image: "EeveeImage",
    // },
  ],
  setPokemonCards: () => [{}],
} as PokemonContextProps;

export const PokemonContext =
  createContext<PokemonContextProps>(DEFAULT_VALUES);

export const PokemonContextProvider = ({
  children,
}: PokemonContextProviderProps) => {
  const [pokemonCards, setPokemonCards] = useState<PokemonCardProps[]>(
    DEFAULT_VALUES.pokemonCards
  );


  console.log(pokemonCards)

  useEffect(() => {
    const fetchPokemonData = async () => {
      const pokemonList = await listPokemon();

      const pokemonDataPromises = pokemonList.results.map(async (pokemon: any) => {
        const pokemonData = await get(pokemon.url);

        const name = pokemonData.name;
        const attack = pokemonData.stats.find((stat: any) => stat.stat.name === 'attack')?.base_stat;
        const defense = pokemonData.stats.find((stat: any) => stat.stat.name === 'defense')?.base_stat;
        const experience = pokemonData.base_experience;
        const types = pokemonData.types.map((type: any) => type.type.name);
        const imagem = pokemonData.sprites.other["official-artwork"].front_default;

        console.log(imagem)

        return { name, attack, defense, experience, types, imagem };
      });

      const pokemonData = await Promise.all(pokemonDataPromises);

      setPokemonCards(pokemonData);
    };

    fetchPokemonData();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemonCards, setPokemonCards }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
