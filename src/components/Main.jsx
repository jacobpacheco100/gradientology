import React, { useContext, useState } from 'react'
import { Context } from './Context'
import { AiOutlineRight } from 'react-icons/ai'
import ColorSwatch from './ColorSwatch'
import GradientCard from './GradientCard'

const Main = () => {
  const { gradients } = useContext(Context)
  const [showAllCards, setShowAllCards] = useState(false)

  const cardsFirst = gradients
    .slice(0, 6)
    .sort((a, b) => b.saved - a.saved)
    .map((card) => {
      return <GradientCard key={card.id} props={card} />
    })

  const cardsAll = gradients.map((card) => {
    return <GradientCard key={card.id} props={card} />
  })

  return (
    <main className='container mx-auto px-4 pb-40'>
      <section className='relative'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold mb-3'>Gradients</h2>
          <p className='text-body'>
            <span className='text-blue font-bold'>
              Currently : {cardsAll.length}
            </span>{' '}
            premade custom gradient meshes
          </p>
        </div>
      </section>

      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
        {showAllCards ? cardsAll : cardsFirst}
      </section>

      {!showAllCards && (
        <button
          onClick={() => setShowAllCards(true)}
          className='block mx-auto mt-20 font-bold bg-black  text-white px-7 h-[50px] rounded-md  hover:bg-blackLight '
        >
          Load More
        </button>
      )}
    </main>
  )
}

export default Main
