import { useState, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Saved from './components/Saved'
import Hero from './components/Hero'
import Main from './components/Main'
import Footer from './components/Footer'

import { Context } from './components/Context'

function App() {
  // scroll function : for gradients btn | hero...
  const main = useRef(null)
  const top = useRef(null)
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  const [gradients, setGradients] = useState([
    {
      id: '0',
      gradient:
        'https://products.ls.graphics/mesh-gradients/images/07.-Tidal.jpg',
      name: 'Purple Banana',
      colors: ['#e1619c', '#f99b6a', '#dff68d'],
    },
    {
      id: '1',
      gradient:
        'https://products.ls.graphics/mesh-gradients/images/02.-Egg-Sour.jpg',
      name: 'Cold Vanilla',
      colors: ['#ffefb2', '#bde3f9', '#6f3edd'],
    },
    {
      id: '2',
      gradient:
        'https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1.jpg',
      name: 'Snowy Mint',
      colors: ['#97d7f8', '#c5f5c6', '#5576cd'],
    },
    {
      id: '3',
      gradient:
        'https://products.ls.graphics/mesh-gradients/images/35.-Ronchi.jpg',
      name: 'Fire',
      colors: ['#ff5f64', '#ff9337', '#feec58'],
    },
    {
      id: '4',
      gradient:
        'https://products.ls.graphics/mesh-gradients/images/41.-Tonys-Pink_1.jpg',
      name: 'Summer',
      colors: ['#fead61', '#81c2f5', '#f4f9c6'],
    },
    {
      id: '5',
      gradient:
        'https://products.ls.graphics/mesh-gradients/images/43.-Harvest-Gold.jpg',
      name: 'Harvest',
      colors: ['#a6e667', '#edf983', '#edf7af'],
    },
    {
      id: '6',
      gradient:
        'https://products.ls.graphics/mesh-gradients/images/34.-Mauve_1.jpg',
      name: 'Sunray Ice',
      colors: ['#e3a9fd', '#6292f6', '#52c6f3'],
    },
    {
      id: '7',
      gradient:
        'https://products.ls.graphics/mesh-gradients/images/38.-Sky-Blue_1.jpg',
      name: 'Future Blue',
      colors: ['#cda9c0', '#7ba7f3', '#44dff6'],
    },
    {
      id: '8',
      gradient:
        'https://products.ls.graphics/mesh-gradients/images/32.-Banana-Mania.jpg',
      name: 'Autumn Rise',
      colors: ['#fb548a', '#fffcca', '#774bda'],
    },
    {
      id: '9',
      gradient:
        'https://products.ls.graphics/mesh-gradients/images/36.-Pale-Chestnut.jpg',
      name: 'Easter',
      colors: ['#ffdccc', '#b692de', '#94c5f4'],
    },
    {
      id: '10',
      gradient:
        'https://products.ls.graphics/mesh-gradients/images/28.-Deco.jpg',
      name: 'Northern Lights',
      colors: ['#72a4eb', '#b7a8e3', '#cbf656'],
    },
    {
      id: '11',
      gradient:
        'https://products.ls.graphics/mesh-gradients/images/13.-Pale-Violet-Red_1.jpg',
      name: 'Murica',
      colors: ['#98d7f8', '#7261d7', '#fd5188'],
    },
  ])
  const [showSaved, setShowSaved] = useState(false)
  const [alert, setAlert] = useState(false)

  return (
    <div ref={top} className='App bg-main-bg overflow-x-hidden '>
      <Context.Provider
        value={{
          showSaved,
          setShowSaved,
          alert,
          setAlert,
          gradients,
          setGradients,
        }}
      >
        {/* top */}
        <div className='z-0'>
          <Navbar toggleSaved={() => setShowSaved((prev) => !prev)} />
          <Saved />
          <Hero scroll={() => scrollToSection(main)} />
        </div>

        {/* Main */}
        <div ref={main}></div>
        <Main />
        {/* footer */}
        <Footer scroll={() => scrollToSection(top)} />
      </Context.Provider>
    </div>
  )
}

export default App
