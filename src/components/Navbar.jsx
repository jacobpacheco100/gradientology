import React from 'react'
import { AiFillGithub, AiOutlineHeart } from 'react-icons/ai'
import logo from '../images/logo.png'

const Navbar = ({ toggleSaved }) => {
  return (
    <nav className='flex w-full items-center px-4 md:px-10 xl:px-20 justify-between py-4'>
      <div className='flex'>
        <h3 className='font-bold flex items-center'>
          <img className='mr-3 w-7' src={logo} alt='logo' />
          Gradientology
        </h3>
      </div>

      <div className='flex space-x-4 '>
        <button
          onClick={toggleSaved}
          className='border-solid border-black border-1 h-[50px] px-5 rounded-lg flex items-center hover:bg-gray-100'
        >
          <span className='mr-2'>Saved</span> <AiOutlineHeart />
        </button>

        <a
          href='https://github.com/jacobpacheco100/gradientology'
          className='bg-black text-white h-[50px] px-3 rounded-2xl flex items-center text-2xl'
        >
          <AiFillGithub />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
