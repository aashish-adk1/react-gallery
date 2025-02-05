import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import './index.css'
import bgImg from './assets/Bg.jpg'
function App() {
  return (
    <>
    <section className='heroSection'>
    <div className="wrapper">
      <Navbar/>
      <Hero/>
      </div>
      </section>
    </>
  )
}

export default App
