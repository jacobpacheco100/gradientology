import React from 'react'

const GradientCard = ({ gradient, name, color1, color2, color3 }) => {
  return (
    <div className=' shadow-md rounded-b-xl'>
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
      <div className=' rounded-b-xl h-[40px] bg-black flex items-center justify-between px-4 '>
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