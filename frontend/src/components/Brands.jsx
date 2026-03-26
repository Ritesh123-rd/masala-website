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
    <section className="py-20 bg-rgf-cream selection:bg-rgf-green selection:text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
             <div className="h-px w-16 bg-rgf-saffron"></div>
             <h2 className="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tight">Our <span className="text-rgf-green italic">Brands</span></h2>
             <div className="h-px w-16 bg-rgf-saffron"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.slice(0, 4).map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="bg-white rounded-3xl p-6 shadow-xl border border-rgf-sandy hover:shadow-2xl transition-all group"
            >
              <Link to={brand.path} className="flex flex-col items-center">
                {/* Product Image */}
                <div className="relative w-full aspect-square mb-6 overflow-hidden flex items-center justify-center bg-rgf-cream/30 rounded-2xl">
                    <img 
                      src={brand.image} 
                      alt={brand.name} 
                      className="w-full h-full object-contain filter drop-shadow-xl group-hover:scale-110 transition-transform duration-700"
                    />
                </div>

                {/* Info */}
                <div className="text-center w-full">
                  <h3 className="text-2xl font-black text-brand-dark mb-2 uppercase tracking-tighter truncate">
                    {brand.name}
                  </h3>
                  
                  <div className="text-2xl font-black text-rgf-saffron mb-6">
                     ₹{index === 0 ? '120' : index === 1 ? '150' : index === 2 ? '110' : '180'}
                  </div>

                  <button className="w-full py-3 bg-rgf-orange text-white rounded-xl font-bold uppercase text-[10px] tracking-widest flex items-center justify-center space-x-2 shadow-lg shadow-rgf-orange/20 group-hover:bg-rgf-green transition-all">
                     <ShoppingCart size={16} />
                     <span>Add to Cart</span>
                  </button>
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
