import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import Brands from '../components/Brands'
import ProductGrid from '../components/ProductGrid'

const HomePage = () => {
  return (
    <div className="bg-white">
      <Hero />
      <div className="relative z-10">
        <About />
        <Brands />
        <Features />
        <ProductGrid />
      </div>
    </div>
  )
}

export default HomePage
