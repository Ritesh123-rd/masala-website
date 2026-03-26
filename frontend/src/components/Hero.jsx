import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Leaf, ShieldCheck, Award, ArrowRight } from 'lucide-react'
import heroSpices from '../assets/images/marketing/hero-spices.png'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 md:pt-48 pb-20 bg-rgf-cream">
      {/* Saffron Wave Background - Matches UI Image */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] bg-rgf-saffron overflow-hidden">
         <div className="absolute bottom-0 left-0 right-0 h-32 bg-rgf-cream rounded-t-[100%] scale-x-125 translate-y-16"></div>
         <div className="absolute inset-0 bg-black/5 mix-blend-overlay"></div>
         
         {/* Decorative Image in Saffron - Traditional Feel */}
         <img 
            src={heroSpices} 
            alt="" 
            className="absolute right-0 top-0 h-full w-auto object-cover opacity-20 lg:opacity-30"
         />
      </div>

      <div className="container mx-auto px-4 md:px-10 relative z-10 mt-10 md:mt-20">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-[1] mb-8 text-white uppercase tracking-tight drop-shadow-2xl">
              Pure & <span className="text-rgf-green italic">Authentic</span> <br/>
              Indian Foods
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-6">
              <Link to="/products" className="px-10 py-4 bg-rgf-green text-white rounded-full font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-rgf-green shadow-3xl hover:shadow-white/20 active:scale-95 text-lg">
                Shop Now
              </Link>
            </div>
            
            {/* Trust Badges - Simplified */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mt-16 pt-8 border-t border-white/20">
               <div className="flex flex-col items-center lg:items-start text-white/80">
                  <span className="text-2xl font-black">100%</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold">Natural</span>
               </div>
               <div className="w-px h-10 bg-white/20"></div>
               <div className="flex flex-col items-center lg:items-start text-white/80">
                  <span className="text-2xl font-black">FSSAI</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold">Certified</span>
               </div>
               <div className="w-px h-10 bg-white/20"></div>
               <div className="flex flex-col items-center lg:items-start text-white/80">
                  <span className="text-2xl font-black">INDIA</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold">Heritage</span>
               </div>
            </div>
          </motion.div>

          {/* Hero Image Section - Spice Bowls */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-square md:aspect-[5/4] flex items-center justify-center">
               <img 
                 src={heroSpices} 
                 alt="Authentic Indian Spices" 
                 className="w-full h-full object-contain filter drop-shadow-[0_50px_100px_rgba(0,0,0,0.4)]"
               />
            </div>
            
            {/* Soft Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-rgf-green/20 blur-[120px] rounded-full -z-10 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
