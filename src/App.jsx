import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Photos from './components/Photos'
import Videos from './components/Videos'
import Contact from './components/Contact'
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
      <section className='photoSection'>
      <Photos/>
      </section>
      <section className='videoSection'>
      <Videos/>
      </section>
      <section className='contactSection'>
      <Contact/>
      </section>
    </>
  )
}

export default App
