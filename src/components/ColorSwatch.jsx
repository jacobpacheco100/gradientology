import React from 'react'

const ColorSwatch = ({ color }) => {
  return (
    <div className={`rounded-full h-5 w-5`} style={{ background: color }}></div>
  )
}

export default ColorSwatch
