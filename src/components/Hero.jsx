import React from 'react'
import { AiOutlineFrown, AiOutlineCloseCircle } from 'react-icons/ai'

const Hero = ({ toggleAlert, isAlert, scroll }) => {
  return (
    <div className=' container mx-auto pt-20 md:pt-40 pb-40 md:pb-80  max-w-screen-lg '>
      <h1 className='text-6xl font-bold text-center max-w-4xl mx-auto '>
        Unique custom gradients for your all modern designs
      </h1>
      <p className='  mx-auto text-center font-medium text-body max-w-xl py-10 leading-7'>
        Browse through our vast source of meshes and gradients you can use on
        your porject designs. If your feeling more hands on,
        <a
          onClick={toggleAlert}
          className='font-bold text-orange hover:underline hover:cursor-pointer'
        >
          {' create your own!'}
        </a>
      </p>
      <div className='flex-initial space-y-4 sm:space-y-0 text-center sm:space-x-6 sm:mt-7'>
        <button
          onClick={scroll}
          className=' font-bold bg-black  text-white px-7 h-[50px] rounded-md  mx-auto  hover:bg-blackLight w-[80%] sm:w-auto ease-in duration-100'
        >
          Gradients
        </button>
        <button
          onClick={toggleAlert}
          className='font-bold border-2 border-solid border-black text-black px-7 h-[50px] rounded-md  mx-auto  hover:bg-blue w-[80%] sm:w-auto ease-in duration-100'
        >
          Build Your Own
        </button>
      </div>

      {/* popup */}

      <div
        className={`w-[90%] max-w-[561px] fixed z-10  flex flex-col items-center bg-white  left-1/2 transform -translate-x-1/2 py-10 rounded-lg shadow-md ease-in-out duration-300
        ${isAlert ? ' translate-y-[-450px]' : ' translate-y-[-1400px]'}`}
      >
        <AiOutlineFrown className='text-4xl mb-4' />
        <AiOutlineCloseCircle
          onClick={toggleAlert}
          className='text-2xl text-red-500 absolute top-4 right-4 hover:cursor-pointer'
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
    </div>
  )
}

export default Hero
