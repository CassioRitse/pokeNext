import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Image from 'next/image'

interface Pokemon {
  name: string
  url: string
  id: number
  weight: number
  height: number
  base_experience: number
}

const Pokemon: NextPage<Pokemon> = (props: Pokemon) => {
  return (
    <div className="flex flex-col w-fit my-5 m-auto justify-center">
      <p className="flex w-fit mx-auto p-2 m-2 rounded-md text-white bg-red-900">
        #{props.id}
      </p>
      <div className="bg-zinc-700 text-center text-white p-4">
        <h2 className="font-bold text-4xl">{props.name}</h2>
      </div>
      <div className="flex flex-col items-center py-6 bg-zinc-800 text-white">
        <Image
          src={`https://cdn.traction.one/pokedex/pokemon/${props.id}.png`}
          width="100"
          height="100"
        />
      </div>
      <div className="flex flex-col justify-start p-4 bg-red-900 text-white">
        <p>
          Peso: <span>{props.weight} Kg</span>
        </p>
        <p>
          Altura: <span>{props.height} cm</span>
        </p>
        <p>
          Base experience: <span>{props.base_experience}xp</span>
        </p>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const maxPokemons = 51
  const api = 'https://pokeapi.co/api/v2/pokemon'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  const paths = data.results.map((pokemon: Pokemon, index: number) => {
    return {
      params: { pokemonid: (index + 1).toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

interface PokemonId extends ParsedUrlQuery {
  id: string
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { pokemonid } = context.params as PokemonId

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`)
  const data = await res.json()

  const pokemonDetails = {
    id: data.id,
    name: data.name,
    weight: data.weight,
    height: data.height,
    base_experience: data.base_experience,
  }

  return {
    props: pokemonDetails,
  }
}

export default Pokemon
