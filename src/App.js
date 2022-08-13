import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Saved from './components/Saved'
import Hero from './components/Hero'

function App() {
  const [saved, setSaved] = useState(false)
  const [alert, setAlert] = useState(false)

  function toggleSaved() {
    setSaved((prev) => !prev)
  }
  function toggleAlert() {
    setAlert((prev) => !prev)
  }
  return (
    <div className='App bg-main-bg'>
      <Navbar toggleSaved={toggleSaved} />
      {saved && <Saved toggleSaved={toggleSaved} />}
      {/* hero */}
      <Hero alert={alert} toggleAlert={toggleAlert} />
    </div>
  )
}

export default App
