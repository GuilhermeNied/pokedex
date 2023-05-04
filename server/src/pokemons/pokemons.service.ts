import { Pokemon } from "./@types/pokemon";
import axios, { AxiosResponse } from "axios";

export class PokemonsService {
  async getPokemons() {
    const pokemons = await this.getPokemonsInApi();
    const details = await this.getPokemonsDetails();
    console.log(details);

    this.getPokemonsDetails();

    return pokemons;
  }

  private async getPokemonsInApi() {
    const pokemons = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
    );
    return pokemons.data.results;
  }

  private async getPokemonsDetails() {
    const pokemons: [] = await this.getPokemonsInApi();
    const pokemonsUrls: string[] = pokemons.map((pokemon: any) => pokemon.url);
    let pokemonsDetails;
    pokemonsUrls.map(async (pokemonUrl: string) => {
      const details = await axios.get(pokemonUrl);
      pokemonsDetails = details;
      console.log(pokemonsDetails);
    });

    return pokemonsDetails;
  }
}
