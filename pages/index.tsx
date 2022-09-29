import type { GetStaticProps, NextPage } from 'next'
import axios from 'axios';
import Card from './components/Card';

interface Pokemon {
  name: string,
  url: string,
  id: number,
}

const Home: NextPage<Pokemon> = ({pokemons}: Pokemon) => {
  //console.log(pokemons)
  return (
    <div className='h-full'>
      <h1 className='text-3xl font-bold underline'>PokeNext</h1>
      <div className='flex flex-wrap justify-around m-auto w-4/5'>
        {
          pokemons.map((pokemon: Pokemon) => <Card key={pokemon.id} id={pokemon.id} name={pokemon.name} url={pokemon.url} />)
        }
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const maxPokemons = 51;
  const api = ('https://pokeapi.co/api/v2/pokemon');

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((pokemon: Pokemon, index: number) => {
    pokemon.id = index + 1
  });

  return {
    props: {
      pokemons: data.results,
    }
  }
}

export default Home;