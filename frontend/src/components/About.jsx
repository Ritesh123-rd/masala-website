import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import spiceProcessing from '../assets/images/marketing/spice-processing.png'

const About = () => {
  const highlights = [
    { title: 'Tradition', desc: 'Crafted with age-old techniques' },
    { title: 'Quality', desc: '100% Purity guaranteed in every pack' },
    { title: 'Heritage', desc: 'Inspired by the soil of Hindustan' }
  ]

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative SVG Pattern */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.03] pointer-events-none rotate-180">
         <img src={spiceProcessing} alt="" className="w-full h-full object-cover filter grayscale" />
      </div>

      <div className="container mx-auto px-4 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Images Grid */}
          <div className="relative group p-4 md:p-8">
            <div className="absolute inset-0 bg-rgf-sandy/30 rounded-[4rem] rotate-3 scale-95 group-hover:rotate-6 transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-rgf-orange/5 rounded-[4rem] -rotate-3 scale-95 group-hover:-rotate-6 transition-transform duration-700 delay-100"></div>
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative rounded-[3.5rem] overflow-hidden shadow-4xl border-8 border-white z-10"
            >
               <img 
                 src={spiceProcessing} 
                 alt="Our Heritage" 
                 className="w-full h-auto aspect-square object-cover hover:scale-110 transition-transform duration-[2s]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
               <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between">
                  <div className="bg-white/20 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/30">
                     <span className="text-white text-xs font-black uppercase tracking-[0.2em] leading-none">Since 19XX</span>
                  </div>
               </div>
            </motion.div>

            {/* Float Element */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 md:bottom-10 md:right-10 z-20 bg-white p-6 md:p-8 rounded-[2rem] shadow-4xl border border-rgf-sandy group"
            >
               <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-rgf-green rounded-2xl flex items-center justify-center text-white mb-4 group-hover:rotate-[360deg] transition-transform duration-1000 shadow-xl shadow-rgf-green/20">
                     <CheckCircle2 size={28} />
                  </div>
                  <span className="text-2xl font-black text-brand-dark leading-none">ISO 9001</span>
                  <span className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-[0.15em] mt-2">Certified</span>
               </div>
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="text-rgf-saffron font-black text-xs uppercase tracking-[0.3em] mb-6 block text-center lg:text-left drop-shadow-sm">A Legacy of Taste</span>
            <h2 className="text-4xl md:text-7xl font-bold leading-[0.9] text-brand-dark mb-10 uppercase tracking-tighter text-center lg:text-left">
               The Story <br/>
               of <span className="text-rgf-green underline decoration-rgf-green/5 underline-offset-8">Experience</span> & Quality
            </h2>
            
            <p className="text-brand-dark/50 text-base md:text-lg mb-12 font-medium leading-relaxed uppercase tracking-[0.05em] text-center lg:text-left">
               Experience the pure essence of Indian flavors with Rudransh Global Foods. We bridge the gap between traditional processing and modern hygiene to deliver world-class food products from Bharat to the World.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4 md:px-0">
               {highlights.map((item, i) => (
                  <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                     <span className="text-rgf-orange font-black text-lg mb-2 uppercase leading-none">{item.title}</span>
                     <span className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-widest leading-relaxed">{item.desc}</span>
                  </div>
               ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <Link to="/about" className="btn-primary leading-none py-6 px-14 group transition-all hover:bg-white hover:text-rgf-green hover:shadow-4xl shadow-rgf-green/30 border-2 border-transparent hover:border-rgf-green/20 scale-105 active:scale-95">
                 <span className="font-bold uppercase tracking-[0.3em] text-lg">Our Journey</span>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
