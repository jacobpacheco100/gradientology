import React, { useState, useContext } from 'react'
import { Context } from './Context'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BsDownload } from 'react-icons/bs'

const GradientCard = ({ props }) => {
  const { gradients, setGradients } = useContext(Context)
  const [isSaved, setIsSaved] = useState(false)

  function saveHandler() {
    const filterUnsaved = gradients.filter((card) => card.id !== props.id)
    setGradients([
      {
        ...props,
        saved: !props.saved,
      },
      ...filterUnsaved,
    ])
  }

  // const result = inventory.find(({ name }) => name === 'cherries')

  return (
    <section className=' shadow-md rounded-b-xl w-full relative group'>
      {/* save button */}
      <button
        onClick={saveHandler}
        className={`absolute z-10 top-4 right-4 p-2 bg-white rounded-full text-red shadow-md  group-hover:block ${
          props.saved ? 'block' : 'hidden'
        }`}
      >
        {props.saved ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>

      {/* gradient img */}
      <div className='w-full h-80 overflow-hidden relative '>
        <a
          href={props.gradient}
          target='_blank'
          className={`block h-full w-full bg-cover bg-center bg-no-repeat ease-in-out duration-300  hover:scale-125`}
          style={{
            backgroundImage: `url(${props.gradient})`,
            backgroundRepeat: 'no-repeat',
          }}
        ></a>
      </div>
      {/* bottom tab */}
      <div className=' rounded-b-xl h-[40px] bg-white flex items-center justify-between px-4 '>
        {/* name */}
        <h1 className='text-sm text-body font-bold '>{props.name}</h1>
        {/* color pallet */}
        <div className='flex space-x-2'>
          <div
            className={`rounded-full h-3 w-3`}
            style={{ backgroundColor: props.color1 }}
          ></div>
          <div
            className={`rounded-full h-3 w-3`}
            style={{ backgroundColor: props.color2 }}
          ></div>
          <div
            className={`rounded-full h-3 w-3`}
            style={{ backgroundColor: props.color3 }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default GradientCard
