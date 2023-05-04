import { useEffect, useState } from "react"
import { getPokemons } from "./service/getPokemons"
import { PokemonCard } from "./components/pokemonCard"
import './styles.css'

function App() {
  const [pokemons, setPokemons] = useState<any[]>([])
  useEffect(() => {
    getPokemons().then(allPokemons => {
      setPokemons(allPokemons)
    }).catch((error) => {
      console.log(error);
    })
  }, [])


  return (
    <div className="App">
      <div className="pokemonsContainer">
        {
          pokemons.map((pokemon: any) => (
            <PokemonCard
              name={pokemon.name}
              abilities={pokemon.abilities}
              types={pokemon.types} />
          ))
        }
      </div>
    </div>
  )
}

export default App
