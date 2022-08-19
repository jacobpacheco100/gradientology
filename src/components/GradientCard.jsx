import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const GradientCard = ({
  gradient,
  name,
  color1,
  color2,
  color3,

  handleSave,
  unSave,
  id,
  savedGradients,
}) => {
  const [isSaved, setIsSaved] = useState(false)

  function click(id) {
    setIsSaved((prev) => !prev)
    if (isSaved) {
      unSave(id)
    } else {
      handleSave(id)
    }
  }
  return (
    <div className=' shadow-md rounded-b-xl w-full relative group'>
      {/* save button */}
      <button
        onClick={() => click(id)}
        className={`absolute z-10 top-4 right-4 p-2 bg-white rounded-full text-red shadow-md  group-hover:block ${
          isSaved ? 'block' : 'hidden'
        }`}
      >
        {isSaved ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>

      {/* gradient img */}
      <div className='w-full h-80 overflow-hidden relative '>
        <a
          href={gradient}
          target='_blank'
          className={`block h-full w-full bg-cover bg-center bg-no-repeat ease-in-out duration-300  hover:scale-125`}
          style={{
            backgroundImage: `url(${gradient})`,
            backgroundRepeat: 'no-repeat',
          }}
        ></a>
      </div>
      {/* bottom tab */}
      <div className=' rounded-b-xl h-[40px] bg-white flex items-center justify-between px-4 '>
        {/* name */}
        <h1 className='text-sm text-body font-bold '>{name}</h1>
        {/* color pallet */}
        <div className='flex space-x-2'>
          <div
            className={`rounded-full h-3 w-3`}
            style={{ backgroundColor: color1 }}
          ></div>
          <div
            className={`rounded-full h-3 w-3`}
            style={{ backgroundColor: color2 }}
          ></div>
          <div
            className={`rounded-full h-3 w-3`}
            style={{ backgroundColor: color3 }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default GradientCard
