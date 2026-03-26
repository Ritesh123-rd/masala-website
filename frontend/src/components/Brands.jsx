import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

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
<<<<<<< HEAD
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
=======
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
           <div className="max-w-2xl text-center md:text-left">
              <span className="text-rgf-saffron font-black text-xs uppercase tracking-[0.3em] mb-4 block underline decoration-rgf-saffron/20 underline-offset-8">Market Leaders</span>
              <h2 className="text-4xl md:text-6xl font-bold leading-[0.9] text-brand-dark uppercase tracking-tighter">
                 Our <span className="text-rgf-green italic underline decoration-rgf-green/5 underline-offset-4 tracking-[0.05em]">Legacy</span> Brands
              </h2>
           </div>
           
           {/* Section Controls - Placeholder for carousel if needed */}
           <Link to="/products" className="hidden md:flex items-center space-x-3 text-brand-dark/30 hover:text-brand-dark transition-colors group">
              <span className="text-[10px] font-black uppercase tracking-widest">View All Our Brands</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
>>>>>>> f091a5b48e23b94a4de958a4b6418ecd92262291
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
<<<<<<< HEAD
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
=======
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative"
            >
              <Link to={brand.path} className="block overflow-hidden rounded-[3rem] bg-zinc-50 border border-brand-dark/5 p-10 lg:p-14 hover:shadow-4xl transition-all duration-700 hover:-translate-y-4">
                <div className="relative z-10 w-full aspect-square flex items-center justify-center">
                   <img 
                     src={brand.image} 
                     alt={brand.name} 
                     className="max-h-full max-w-full object-contain filter drop-shadow-3xl group-hover:scale-110 transition-transform duration-[1.5s]"
                   />
                </div>
                
                {/* Brand Overlay */}
                <div className="absolute inset-x-10 bottom-10 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                   <div className="flex flex-col">
                      <span className="text-[10px] font-black text-brand-dark/30 uppercase tracking-widest">Brand Name</span>
                      <span className="text-2xl font-black text-brand-dark leading-none">{brand.name}</span>
                   </div>
                   <div className="w-12 h-12 bg-brand-dark text-white rounded-2xl flex items-center justify-center shadow-2xl">
                      <ArrowRight size={24} />
                   </div>
>>>>>>> f091a5b48e23b94a4de958a4b6418ecd92262291
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
