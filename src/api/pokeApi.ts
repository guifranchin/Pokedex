import axios from 'axios';
import { AbilityData } from "./apiResponse";



function getInstance() {
  return axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function get<T>(url: string): Promise<T> {
  try {
    const axios = getInstance();
    const res = await axios.get(url);
    return res.data;
  } catch (error: any) {
    console.log(error.response);
    throw error;
  }
}

export function listPokemon(offset: number): Promise<AbilityData> {
  return get(`pokemon?offset=${offset}&limit=9`);
}
