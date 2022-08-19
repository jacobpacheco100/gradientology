import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { TbTrashX } from 'react-icons/tb'

const SavedGradientCard = ({
  gradient,
  name,
  color1,
  color2,
  color3,
  id,
  unSave,
}) => {
  return (
    <div className=' shadow-md rounded-b-md  relative'>
      {/* save button */}
      <button
        onClick={() => unSave(id)}
        className='absolute z-10 top-4 right-4 p-2 bg-white rounded-full shadow-md hover:text-white hover:bg-red '
      >
        <TbTrashX />
      </button>

      {/* gradient img */}
      <div className='w-full h-40 overflow-hidden relative '>
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
      <div className=' rounded-b-md h-[30px] bg-white flex items-center justify-between px-4 '>
        {/* name */}
        <h1 className='text-xs text-body font-bold '>{name}</h1>
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

export default SavedGradientCard
