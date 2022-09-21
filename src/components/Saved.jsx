import React, { useContext, useState } from 'react'
import { Context } from './Context'
import { AiFillHeart, AiOutlineClose } from 'react-icons/ai'
import SavedGradientCard from './SavedGradientCard'

// placeholder

const Saved = () => {
  const { showSaved, setShowSaved, gradients } = useContext(Context)

  const savedList = gradients
    .filter((card) => card.saved)
    .map((card) => {
      return <SavedGradientCard key={card.id} props={card} />
    })

  return (
    <aside
      className={` z-20 fixed ease-in-out duration-300  top-0 right-0 w-full md:w-[721px] h-full bg-white drop-shadow-lg overflow-scroll ${
        showSaved ? ' translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='flex w-full items-center px-4 md:px-10 justify-between my-4 h-[50px]'>
        <span className='font-bold flex items-center'>
          <AiFillHeart className='mr-3 text-red text-2xl' />
          Saved Gradients ...{' '}
        </span>

        <button onClick={() => setShowSaved(false)}>
          <AiOutlineClose />
        </button>
      </div>

      {/* saved gradients... */}

      <p className='px-4 md:px-10 text-body font-medium'>
        {!savedList.length ? 'Looks like you have no saved gradients...' : ''}
      </p>
      <div className='px-10 w-full grid grid-cols-2 gap-7'>{savedList}</div>
    </aside>
  )
}

export default Saved
