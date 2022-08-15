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

  const [saved, setSaved] = useState([])

  function log(id) {
    const card = data[id]
    setSaved((prev) => [...prev, card])
  }

  console.log(saved)

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
