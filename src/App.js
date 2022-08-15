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

  function log(id) {
    let card
    for (let i = 0; i < saved.length; i++) {
      if (id === saved[i].id) {
        console.log(id)
        console.log('nothing')
      } else {
        card = data[id]
        setSaved((prev) => [...prev, card])
      }
    }

    // if id == id of any object in data => do nothing, else card = data[id]
  }

  // console.log(saved)

  return (
    <div className='App bg-main-bg overflow-x-hidden '>
      {/* Nav / Hero */}
      <Navbar toggleSaved={toggleSaved} />
      <Saved
        toggleSaved={toggleSaved}
        isSave={showSaved}
        savedGradients={saved}
      />
      <Hero toggleAlert={toggleAlert} isAlert={alert} />

      {/* Main */}
      <Main isFilter={filter} toggleFilter={toggleFilter} handleSave={log} />
      <Footer />
    </div>
  )
}

export default App
