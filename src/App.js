import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Saved from './components/Saved'

function App() {
  const [saved, setSaved] = useState(false)

  function toggleSaved() {
    setSaved((prev) => !prev)
  }
  return (
    <div className='App bg-main-bg'>
      <Navbar toggleSaved={toggleSaved} />
      {saved && <Saved toggleSaved={toggleSaved} />}
      {/* hero */}
      <div className=' container mx-auto px-4 max-w-screen-lg'>
        <h1 className='text-6xl font-bold text-center mt-40 max-w-4xl mx-auto'>
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
        <div className='flex-initial  text-center space-x-6'>
          <button className='bg-black  text-white px-7 py-3 rounded-md  mx-auto mt-7 hover:bg-blackLight'>
            Gradients
          </button>
          <button className='border-2 border-solid border-black text-black px-7 py-3 rounded-md  mx-auto mt-7 hover:bg-gray-100'>
            Build Your Own
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
