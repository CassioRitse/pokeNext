import type { GetStaticProps, NextPage } from 'next'
import Card from '../components/Card'

export interface Pokemon {
  name: string
  url: string
  id: number
}

export interface Props {
  pokemons: [
    {
      name: string
      url: string
      id: number
    }
  ]
}

const Home: NextPage<Props> = (props: Props) => {
  return (
    <div className="h-full">
      <div className="w-fit bg-zinc-800 m-auto rounded-lg">
        <h1 className="text-4xl p-4 font-bold text-white">PokeNext</h1>
      </div>
      <div className="flex flex-wrap justify-around m-auto w-4/5">
        {props.pokemons.map((pokemon) => (
          <Card key={pokemon.id} id={pokemon.id} name={pokemon.name} />
        ))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const maxPokemons = 51
  const api = 'https://pokeapi.co/api/v2/pokemon'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((pokemon: Pokemon, index: number) => {
    pokemon.id = index + 1
  })
  return {
    props: {
      pokemons: data.results,
    },
  }
}

export default Home
