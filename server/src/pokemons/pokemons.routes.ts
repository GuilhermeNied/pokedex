import { Router } from "express";

import { PokemonsService } from "./pokemons.service";

export const router = Router();

const pokemonService = new PokemonsService();

router.get("/bff/pokemons", (req, res) => {
  const pokemons = pokemonService.getPokemons();
  return res.send(pokemons);
});
