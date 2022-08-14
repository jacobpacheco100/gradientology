import React from 'react'
import { AiFillHeart, AiOutlineClose } from 'react-icons/ai'

const Saved = ({ toggleSaved, isSave }) => {
  return (
    <aside
      className={`fixed ease-in-out duration-300  top-0 right-0 w-full md:w-[721px] h-[1000px] bg-white drop-shadow-lg ${
        isSave ? ' translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='flex w-full items-center px-4 md:px-10 justify-between my-4 h-[50px]'>
        <span className='font-bold flex items-center'>
          <AiFillHeart className='mr-3 text-red-500 text-2xl' />
          Saved Gradients ...{' '}
        </span>

        <button onClick={toggleSaved}>
          <AiOutlineClose />
        </button>
      </div>
    </aside>
  )
}

export default Saved