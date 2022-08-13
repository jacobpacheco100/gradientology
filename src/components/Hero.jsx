import React from 'react'
import { AiOutlineFrown, AiOutlineCloseCircle } from 'react-icons/ai'

const Hero = ({ toggleAlert, alert }) => {
  return (
    <div className=' container mx-auto px-4 max-w-screen-lg '>
      <h1 className='text-6xl font-bold text-center pt-20 md:pt-40 max-w-4xl mx-auto'>
        Unique custom gradients for your all modern designs
      </h1>
      <p className=' mt-8 mx-auto text-center font-light max-w-xl leading-7'>
        Brows through out vast source of meshes and gradients you can use on
        your porject designs. If your feeling more hands on,
        <a href='#' className='font-bold text-orange'>
          {' '}
          create your own!
        </a>
      </p>
      <div className='flex-initial  text-center sm:space-x-6'>
        <button className='bg-black  text-white px-7 py-3 rounded-md  mx-auto mt-7 hover:bg-blackLight w-[80%] sm:w-auto'>
          Gradients
        </button>
        <button
          onClick={toggleAlert}
          className='border-2 border-solid border-black text-black px-7 py-3 rounded-md  mx-auto mt-4 sm:mt-7 hover:bg-gray-100 w-[80%] sm:w-auto'
        >
          Build Your Own
        </button>
      </div>

      {/* popup */}
      {alert && (
        <div className='w-full max-w-[561px] h-[345px] absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white rounded-lg drop-shadow-xl flex items-center justify-center flex-col '>
          <AiOutlineFrown className='text-4xl mb-4' />
          <AiOutlineCloseCircle
            onClick={toggleAlert}
            className='text-2xl text-red-500 absolute top-4 right-4'
          />
          <h3 className='font-bold text-lg'>" Build Your Own "</h3>
          <p className='max-w-[388px] py-4 text-center text-body'>
            Is currently in developement. In the meantime i highly recomend this
            website
          </p>
          <a className='font-bold text-blue-300 text-blue' href='#'>
            https://meshgradient.com/
          </a>
        </div>
      )}
    </div>
  )
}

export default Hero
