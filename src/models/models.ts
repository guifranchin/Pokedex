export const typeColors: { [key: string]: string } = {
  stile: "#A1A1A1",
  dark: "#AIAIAI",
  rock: "#AIAIAI",
  poison: "#A974BC",
  psychic: "#A974BC",
  fairy: "#A974BC",
  ghost: "#A974BC",
  grass: "#70A83B",
  bug: "#70A83B",
  ground: "#9B897B",
  ice: "#A2CFF0",
  water: "#A2CFF0",
  electric: "#9B897B",
  fire: "#F76545",
  fighting: "#F76545",
  dragon: "#A1A1A1",
  normal: "#76AADB",
  gosth: "#A1A1A1",
};

export type PokemonDataType = {
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
  abilities: string[];
};

export type PokemonCardProps = {
  pokemon: PokemonDataType;
};
