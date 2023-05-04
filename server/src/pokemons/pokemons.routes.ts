import { Router } from "express";

import { PokemonsService } from "./pokemons.service";

export const router = Router();

const pokemonService = new PokemonsService();

router.get("/bff/pokemons", async (req, res) => {
  const pokemons = await pokemonService.getPokemons();
  return res.send(pokemons);
});
