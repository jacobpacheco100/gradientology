import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import ColorSwatch from './ColorSwatch'

const Main = ({ isFilter, toggleFilter }) => {
  return (
    <main className='container mx-auto px-4 '>
      <section className='relative'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold mb-3'>Gradients</h2>
          <p className='text-body'>
            <span className='text-blue font-bold'>Currently : 86</span> premade
            custom gradient meshes
          </p>
        </div>

        <div className='mt-5 flex items-center'>
          <button
            onClick={toggleFilter}
            className='flex items-center px-4 py-2 bg-gray-200 rounded-md text-sm font-bold text-body hover:bg-gray-300'
          >
            Filter <AiOutlineRight className='ml-3 text-xs' />
          </button>
          {isFilter && (
            <div className='flex items-center space-x-2 py-2 px-6 rounded-lg bg-gray-200 ml-5'>
              <ColorSwatch />
              <ColorSwatch />
              <ColorSwatch />
              <ColorSwatch />
              <ColorSwatch />
              <ColorSwatch />
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default Main
