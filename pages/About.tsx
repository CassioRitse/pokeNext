import { NextPage } from 'next'
import Image from 'next/image'
import ImageAbout from '../public/images/charizard.png'

const About: NextPage = () => {
  return (
    <div className="text-center mt-4 h-full">
      <h1 className="text-6xl font-normal my-4">Projeto para treinar</h1>
      <h2 className="text-3xl font-semibold mt-4">Stack/Tools</h2>
      <h3 className="text-3xl">ReactJs + NextJs + Tailwind</h3>
      <p className="my-4">
        Creditos: Matheus Battisti - Hora de Codar | Youtuber
      </p>
      <Image src={ImageAbout} width="300" height="300" />
    </div>
  )
}

export default About
