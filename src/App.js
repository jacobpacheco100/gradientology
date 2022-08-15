import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Saved from './components/Saved'
import Hero from './components/Hero'
import Main from './components/Main'
import Footer from './components/Footer'
import data from './gradientCardsData.json'

function App() {
  const [showSaved, setShowSaved] = useState(false)
  const [alert, setAlert] = useState(false)
  const [filter, setFilter] = useState(false)

  function toggleSaved() {
    setShowSaved((prev) => !prev)
  }
  function toggleAlert() {
    setAlert((prev) => !prev)
  }
  function toggleFilter() {
    setFilter((prev) => !prev)
  }

  // saved gradients

  const [saved, setSaved] = useState([
    {
      id: '2',
      gradient:
        'https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1.jpg',
      name: 'Snowy Mint',
      colors: ['gray', 'gray', 'gray'],
    },
  ])

  function save(id) {
    let card
    card = data[id]
    setSaved((prev) => [...prev, card])

    // if id == id of any object in data => do nothing, else card = data[id]
  }

  // delete from saved...
  function unSave(id) {
    setSaved((prev) => {
      return prev.filter((save) => save.id !== id)
    })
  }

  // console.log(saved)

  return (
    <div className='App bg-main-bg overflow-x-hidden '>
      <div className='z-0'>
        <Navbar toggleSaved={toggleSaved} />
        <Saved
          toggleSaved={toggleSaved}
          isSave={showSaved}
          savedGradients={saved}
        />
        <Hero toggleAlert={toggleAlert} isAlert={alert} />
      </div>

      {/* Main */}
      <Main
        isFilter={filter}
        toggleFilter={toggleFilter}
        handleSave={save}
        unSave={unSave}
      />
      <Footer />
    </div>
  )
}

export default App

{
  /* bg gradients : fix */
}

{
  /* <div>
  <div
    style={{
      zIndex: '0',
      position: 'absolute',
      width: '2823px',
      height: '1320px',
      left: '-724px',
      top: '-1080px',
      background:
        'radial-gradient(50% 50% at 50% 50%, #FF9F47 0%, rgba(255, 255, 255, 0) 100%)',
    }}
  ></div>

  <div
    style={{
      position: 'absolute',
      width: '2323px',
      height: '1220px',
      left: '-1800px',
      top: '-311px',
      background:
        'radial-gradient(50% 50% at 50% 50%, rgba(71, 255, 211, 0.8) 0%, rgba(255, 255, 255, 0) 100%)',
    }}
  ></div>

  <div
    style={{
      position: 'absolute',
      width: '1320px',
      height: '1320px',
      left: '779px',
      top: '-786px',
      background:
        'radial-gradient(50% 50% at 50% 50%, rgba(240, 71, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%)',
      opacity: '.6',
    }}
  ></div>
</div> */
}
{
  /* Nav / Hero */
}
