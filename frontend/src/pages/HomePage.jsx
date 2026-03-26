import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import Brands from '../components/Brands'

const HomePage = () => {
  return (
    <div className="bg-white">
      <Hero />
      <div className="relative z-10">
        <About />
        <Brands />
        <Features />
      </div>
    </div>
  )
}

export default HomePage
