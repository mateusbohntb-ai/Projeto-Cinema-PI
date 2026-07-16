import { useState } from 'react'

//Import das rotas 
import { Route, Routes } from 'react-router-dom'

//Import do Css global 
import './App.css'

//Components 
import Header from './Components/Header'
import Footer from './Components/Footer'

//Paginas 
import Home from './Pages/Home'


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      
      </Routes>

      <Footer />
    </>
  )
}

export default App
