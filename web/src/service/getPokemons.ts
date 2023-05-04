import { api } from "./api";

export async function getPokemons() {
  const pokemons = await api.get("/bff/pokemons");
  return pokemons.data;
}
