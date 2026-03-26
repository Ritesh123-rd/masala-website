import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import spiceProcessing from '../assets/images/marketing/spice-processing.png'

const About = () => {
  const highlights = [
    'Modern Manufacturing',
    'Quality Tested Products',
    'Affordable Pricing',
  ]

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Part */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-4 border-rgf-saffron/20 shadow-2xl">
               <img 
                 src={spiceProcessing} 
                 alt="Manufacturing Unit" 
                 className="w-full h-auto aspect-video lg:aspect-square object-cover"
               />
               {/* Label in UI image */}
               <div className="absolute top-0 left-0 bg-rgf-green text-white py-2 px-6 rounded-br-2xl font-bold uppercase text-[10px] tracking-widest shadow-lg italic">
                  Heritage Processing
               </div>
            </div>
          </motion.div>

          {/* Text Part */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="flex items-center space-x-4 mb-4">
               <div className="h-0.5 w-12 bg-rgf-green"></div>
               <h2 className="text-3xl md:text-4xl font-black text-brand-dark uppercase tracking-tight">
                 About <span className="text-rgf-green italic">Rudransh</span> Global Foods
               </h2>
               <div className="h-px flex-1 bg-rgf-green/20"></div>
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-rgf-saffron mb-6 uppercase tracking-[0.1em]">
              Committed to Quality and Tradition
            </h3>
            
            <p className="text-base md:text-lg text-brand-dark/70 mb-8 leading-relaxed font-medium">
              Delivering fresh, pure and authentic food products across India. We bring the rich heritage of "Kisan Hindustani Masale" to your dining table with no compromise on quality.
            </p>

            <div className="space-y-4 mb-10">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center space-x-3 group animate-in fade-in slide-in-from-left duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="w-5 h-5 bg-white border-2 border-rgf-saffron rounded-full flex items-center justify-center text-rgf-saffron shadow-sm">
                    <CheckCircle2 size={12} strokeWidth={4} />
                  </div>
                  <span className="text-sm md:text-base font-bold text-brand-dark/80 tracking-wide">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="inline-flex items-center justify-center space-x-3 px-12 py-4 bg-rgf-green text-white rounded-full font-black uppercase tracking-[0.3em] transition-all hover:bg-rgf-orange hover:shadow-2xl hover:scale-105 active:scale-95 text-xs shadow-xl shadow-rgf-green/20">
               <span>Read More</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
