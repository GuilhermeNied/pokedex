import axios from "axios";

export class PokemonsService {
  async getPokemons() {
    const details = await this.getPokemonsDetails();
    const pokemonsDetails = details.map((pokemonDetail) => {
      const pokemonAbilities = pokemonDetail.abilities.map(
        (ability: any) => ability.ability.name
      );
      const pokemonTypes = pokemonDetail.types.map(
        (type: any) => type.type.name
      );
      const pokemon = {
        name: pokemonDetail.name,
        abilities: pokemonAbilities,
        types: pokemonTypes,
        sprite: pokemonDetail.sprites.front_default,
      };
      return pokemon;
    });

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
