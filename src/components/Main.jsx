import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import ColorSwatch from './ColorSwatch'
import GradientCard from './GradientCard'
import data from '../gradientCardsData.json'

const Main = ({ isFilter, toggleFilter }) => {
  const cards = data.map((card) => {
    return (
      <GradientCard
        gradient={card.gradient}
        name={card.name}
        color1={card.colors[0]}
        color2={card.colors[1]}
        color3={card.colors[2]}
      />
    )
  })

  const colors = {
    filterRed: '#F04040',
    filterOrange: '#FDBC5B',
    filterGreen: '#6FED43',
    filterCyan: '#30F9E1',
    filterBlue: '#4A64ED',
    filterPurple: '#F13DF4',
  }

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

        <div className='mt-10 flex items-center'>
          <button
            onClick={toggleFilter}
            className='flex items-center px-4 py-2 bg-gray-200 rounded-md text-sm font-bold text-body hover:bg-gray-300'
          >
            Filter <AiOutlineRight className='ml-3 text-xs' />
          </button>
          {isFilter && (
            <div className='flex items-center space-x-2 py-2 px-3 rounded-full bg-black ml-5'>
              <ColorSwatch color={colors.filterRed} />
              <ColorSwatch color={colors.filterOrange} />
              <ColorSwatch color={colors.filterGreen} />
              <ColorSwatch color={colors.filterCyan} />
              <ColorSwatch color={colors.filterBlue} />
              <ColorSwatch color={colors.filterPurple} />
            </div>
          )}
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
