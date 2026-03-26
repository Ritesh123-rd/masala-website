import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Importing brand assets from src
import kisanImg from '../assets/images/brands/kisan_masale.png'
import rgfImg from '../assets/images/brands/rgf_spices.png'
import annapurnaImg from '../assets/images/brands/annapurna_atta.png'
import mustardImg from '../assets/images/brands/mustard_oil.png'
import shivayImg from '../assets/images/brands/shivay_chips.png'
import vaibhavImg from '../assets/images/brands/vaibhav_wafers.png'

const brands = [
  {
    name: 'Kisan Masale',
    path: '/products?brand=kisan',
    image: kisanImg,
  },
  {
    name: 'RGF Spices',
    path: '/products?brand=rgf',
    image: rgfImg,
  },
  {
    name: 'Annapurna Atta',
    path: '/products?category=atta',
    image: annapurnaImg,
  },
  {
    name: 'Kishan Mustard Oil',
    path: '/products?category=oil',
    image: mustardImg,
  },
  {
    name: 'Shivay Chips',
    path: '/products?category=snacks',
    image: shivayImg,
  },
  {
    name: 'Vaibhav Wafers',
    path: '/products?category=snacks',
    image: vaibhavImg,
  }
]

const Brands = () => {
  return (
    <section className="py-16 md:py-20 bg-white selection:bg-rgf-green selection:text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-rgf-green font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Projected Purity</span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-dark mb-6 uppercase tracking-tight">Our <span className="text-rgf-saffron italic">Signature</span> Brands</h2>
          <p className="text-brand-dark/50 text-sm md:text-xl font-medium max-w-2xl mx-auto leading-relaxed uppercase tracking-widest opacity-80">
            From farm to kitchen, we bring you the finest range of traditional Indian essentials.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 md:gap-x-6 gap-y-12 md:gap-y-16">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <Link to={brand.path} className="flex flex-col items-center">
                {/* Product Showcase Stage */}
                <div className="relative w-full aspect-[4/3] flex items-center justify-center mb-6 overflow-hidden">
                  <motion.div 
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 3,
                      y: -10
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="relative z-10 w-full h-full p-4 flex items-center justify-center"
                  >
                    <img 
                      src={brand.image} 
                      alt={brand.name} 
                      className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] group-hover:drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)] transition-all duration-700 select-none pointer-events-none"
                    />
                  </motion.div>
                  
                  {/* Soft Background Pulse */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full scale-90 blur-3xl"></div>
                </div>

                {/* Typography & Labeling */}
                <div className="text-center group-hover:translate-y-[-5px] transition-transform duration-500">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tighter transition-colors duration-500 group-hover:text-rgf-green uppercase">
                    {brand.name}
                  </h3>
                  
                  {/* Custom Indicator Line */}
                  <div className="flex justify-center mt-3">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: 30 }}
                      className="h-[2px] bg-slate-200 rounded-full group-hover:w-16 group-hover:bg-rgf-green transition-all duration-500"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
