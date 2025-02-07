import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import HowItWorks from './pages/HowItWorks'
import Services from './pages/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/howitworks' element={<HowItWorks />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </>
  )
}

export default App
