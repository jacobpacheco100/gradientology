import React from 'react'
import { AiFillHeart, AiOutlineClose } from 'react-icons/ai'
import SavedGradientCard from './SavedGradientCard'

// placeholder

const Saved = ({ toggleSaved, isSave, savedGradients, unSave }) => {
  const saved = savedGradients.map((card) => {
    return (
      <SavedGradientCard
        gradient={card.gradient}
        name={card.name}
        color1={card.colors[0]}
        color2={card.colors[1]}
        color3={card.colors[2]}
        id={card.id}
        unSave={unSave}
      />
    )
  })

  return (
    <aside
      className={` z-20 fixed ease-in-out duration-300  top-0 right-0 w-full md:w-[721px] h-full bg-white drop-shadow-lg overflow-scroll ${
        isSave ? ' translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='flex w-full items-center px-4 md:px-10 justify-between my-4 h-[50px]'>
        <span className='font-bold flex items-center'>
          <AiFillHeart className='mr-3 text-red text-2xl' />
          Saved Gradients ...{' '}
        </span>

        <button onClick={toggleSaved}>
          <AiOutlineClose />
        </button>
      </div>

      {/* saved gradients... */}

      <p className='px-4 md:px-10 text-body font-medium'>
        {!saved.length ? 'Looks like you have no saved gradients...' : ''}
      </p>
      <div className='px-10 w-full grid grid-cols-2 gap-7'>{saved}</div>
    </aside>
  )
}

export default Saved
