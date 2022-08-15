import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import ColorSwatch from './ColorSwatch'
import GradientCard from './GradientCard'
import data from '../gradientCardsData.json'

const Main = ({ handleSave, unSave }) => {
  const cards = data.map((card) => {
    return (
      <GradientCard
        key={card.id}
        gradient={card.gradient}
        name={card.name}
        color1={card.colors[0]}
        color2={card.colors[1]}
        color3={card.colors[2]}
        handleSave={handleSave}
        unSave={unSave}
        id={card.id}
      />
    )
  })

  return (
    <main className='container mx-auto px-4 pb-40'>
      <section className='relative'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold mb-3'>Gradients</h2>
          <p className='text-body'>
            <span className='text-blue font-bold'>Currently : 86</span> premade
            custom gradient meshes
          </p>
        </div>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
        {cards}
      </section>

      <button className='block mx-auto mt-20 font-bold bg-black  text-white px-7 h-[50px] rounded-md  hover:bg-blackLight '>
        Load More
      </button>
    </main>
  )
}

export default Main
