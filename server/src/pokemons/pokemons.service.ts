import { Pokemon } from "./@types/pokemon";
import axios, { AxiosResponse } from "axios";

export class PokemonsService {
  async getPokemons() {
    const details = await this.getPokemonsDetails();
    const pokemonsDetails = details.map((pokemonDetail) => {
      const pokemon = {
        name: pokemonDetail.name,
        abilities: pokemonDetail.abilities.map(
          (ability: any) => ability.ability.name
        ),
        types: pokemonDetail.types.map((type: any) => type.type.name),
      };
      return pokemon;
    });

    console.log(pokemonsDetails);

    this.getPokemonsDetails();

    return pokemonsDetails;
  }

  private async getPokemonsInApi() {
    const pokemons = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
    );
    pokemons.data.results.map((pokemon: any, id: any) => {
      pokemon.id = id + 1;
    });

    return pokemons.data.results;
  }

  private async getPokemonsDetails() {
    const pokemons: [] = await this.getPokemonsInApi();
    const pokemonsIds: string[] = pokemons.map((pokemon: any) => pokemon.id);
    const pokemonsDetails = await Promise.all(
      pokemonsIds.map((pokemonId: any) =>
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
          .then((res) => {
            return res.data;
          })
      )
    );

    return pokemonsDetails;
  }
}
