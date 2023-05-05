import './style.css'

interface Pokemon {
  pokemonImg: string,
  name: string,
  abilities: string[],
  types: string[]
}

export function PokemonCard({ pokemonImg, name, abilities, types }: Pokemon) {
  return (
    <div className={`pokemonCardContainer ${types[0].toLowerCase()}`}>
      <div>
        <img src={pokemonImg} alt={name} />
        <h2>{name[0].toUpperCase() + name.substring(1)}</h2>
      </div>
      <ul>
        <div className='abilitiesContainer'>
          <h3>Abilities</h3>
          {
            abilities.map(ability => (
              <li>{ability[0].toUpperCase() + ability.substring(1)}</li>
            ))
          }
        </div>


        <div className='typesContainer'>
          <h3>Types</h3>
          {
            types.map(type => (
              <li>{type[0].toUpperCase() + type.substring(1)}</li>
            ))
          }
        </div>
      </ul>
    </div>
  )
}