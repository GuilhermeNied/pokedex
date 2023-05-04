import { Pokemon } from "./@types/pokemon";

export class PokemonsService {
  getPokemons(): Pokemon[] {
    const pokemons: Pokemon[] = [
      {
        name: "Test Pokemon",
        abilities: ["Dash"],
        types: ["Grass"],
      },
      {
        name: "Test Pokemon",
        abilities: ["Dash"],
        types: ["Fire"],
      },
      {
        name: "Test Pokemon",
        abilities: ["Dash"],
        types: ["Water"],
      },
      {
        name: "Test Pokemon",
        abilities: ["Dash"],
        types: ["Water"],
      },
    ];

    return pokemons;
  }
}
