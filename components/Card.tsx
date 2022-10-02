import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  id: number
  name: string
}

const Card: React.FC<Props> = (props: Props) => {
  return (
    <div className="flex flex-col m-5 shadow-black shadow-md ">
      <div className="py-4 px-6 justify-center items-center bg-zinc-800 ">
        <p className="flex w-fit mx-auto mb-5 p-1  rounded-md text-white bg-red-900">
          #{props.id}
        </p>
        <div className="flex justify-center">
          <Image
            src={`https://cdn.traction.one/pokedex/pokemon/${props.id}.png`}
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="text-center  bg-red-900 pb-2 pt-1">
        <h2 className="text-white font-semibold">{props.name}</h2>
        <Link href={`/pokemon/${props.id}`}>
          <a className="font-light text-xs p-1 rounded-lg w-4/5 text-black bg-white">
            Detalhes
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Card
