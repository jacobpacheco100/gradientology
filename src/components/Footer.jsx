import React from 'react'
import logo from '../images/logo-dark.png'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='bg-black text-sm'>
      <div className='container mx-auto px-4 flex justify-between items-start space-y-5 sm:space-y-0 sm:items-center flex-col py-10 sm:py-5 sm:flex-row'>
        {' '}
        <div className='flex'>
          <a href='#' className='text-body font-bold flex items-center'>
            <img className='mr-3 w-4' src={logo} alt='logo' />
            Gradientology
          </a>
        </div>
        <div className='flex flex-row-reverse sm:flex-row  items-center'>
          <p className='text-body font-medium'>
            Made by :{' '}
            <a
              href='https://github.com/jacobpacheco100'
              className='font-bold text-orange hover:underline'
            >
              Jacob Pacheco
            </a>
          </p>
          <a href='https://github.com/jacobpacheco100/gradientology'>
            <AiFillGithub className=' ease-in-out duration-300 text-white text-xl mr-5 sm:mr-0 sm:ml-5 hover:scale-150' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
