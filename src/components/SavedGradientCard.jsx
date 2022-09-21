import React, { useContext } from 'react'
import { Context } from './Context'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { TbTrashX } from 'react-icons/tb'

const SavedGradientCard = ({ props }) => {
  const { gradients, setGradients } = useContext(Context)
  function unSaveHandler() {
    const filterUnsaved = gradients.filter((card) => card.id !== props.id)
    setGradients([
      {
        ...props,
        saved: !props.saved,
      },
      ...filterUnsaved,
    ])
  }
  return (
    <div className=' shadow-md rounded-b-md  relative'>
      {/* save button */}
      <button
        onClick={unSaveHandler}
        className='absolute z-10 top-4 right-4 p-2 bg-white rounded-full shadow-md hover:text-white hover:bg-red '
      >
        <TbTrashX />
      </button>

      {/* gradient img */}
      <div className='w-full h-40 overflow-hidden relative '>
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
      <div className=' rounded-b-md h-[30px] bg-white flex items-center justify-between px-4 '>
        {/* name */}
        <h1 className='text-xs text-body font-bold '>{props.name}</h1>
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
    </div>
  )
}

export default SavedGradientCard
