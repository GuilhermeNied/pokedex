import './style.css'

interface Pokemon {
  name: string,
  abilities: string[],
  types: string[]
}

export function PokemonCard({ name, abilities, types }: Pokemon) {
  return (
    <div className={`pokemonCardContainer ${types[0].toLowerCase()}`}>
      <h2>{name}</h2>
      <ul>
        {
          abilities.map(ability => (
            <li>{ability}</li>
          ))
        }
      </ul>
      <ul>
        {
          types.map(ability => (
            <li>{ability}</li>
          ))
        }
      </ul>
    </div>
  )
}