import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar'
import Movies from './pages/Movies'
import Computers from './pages/Computers'
import HOC from './pages/HOC'
import Render from './pages/Render'
import Calendar from './pages/Calendar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/computers' element={<Computers />} />
        <Route path='/hoc' element={<HOC />} />
        <Route path='/render' element={<Render />} />
        <Route path='/calendar' element={<Calendar />} />
      </Routes>
    </>
  )
}

export default App
