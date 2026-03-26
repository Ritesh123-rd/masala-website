import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import Brands from '../components/Brands'
<<<<<<< HEAD
import ProductGrid from '../components/ProductGrid'
=======
>>>>>>> f091a5b48e23b94a4de958a4b6418ecd92262291

const HomePage = () => {
  return (
    <div className="bg-white">
      <Hero />
<<<<<<< HEAD
      <About />
      <Features />
      <Brands />
      <ProductGrid />
    </>
=======
      <div className="relative z-10">
        <About />
        <Brands />
        <Features />
      </div>
    </div>
>>>>>>> f091a5b48e23b94a4de958a4b6418ecd92262291
  )
}

export default HomePage
