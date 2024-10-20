// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Results from './pages/Results'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Results/>}/>
        <Route path='/buy' element={<BuyCredit/>}/>
      </Routes>
      <Footer />  
    </div>
  )
}

export default App
