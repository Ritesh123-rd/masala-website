import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import spiceProcessing from '../assets/images/marketing/spice-processing.png'

const About = () => {
  const highlights = [
    'Traditional sun-drying processing methods',
    'State-of-the-art hygienic packaging',
    'Directly sourced from Indian farms',
    'No artificial colors or preservatives',
  ]

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
             initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] border-2 border-rgf-sandy group">
              <img 
                src={spiceProcessing} 
                alt="RGF Spice Processing" 
                className="w-full h-auto min-h-[300px] md:min-h-[500px] aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rgf-green/60 to-transparent"></div>
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 text-white">
                <p className="font-playfair text-2xl md:text-4xl font-bold italic leading-tight">Authentic Indian <br className="hidden md:block"/>Inheritance</p>
              </div>
            </div>
            
            {/* Decorative Gold Badge */}
            <div className="absolute -top-4 -left-4 md:-top-8 md:-left-8 w-16 h-16 md:w-32 md:h-32 bg-rgf-gold/10 border-2 border-rgf-gold/20 rounded-2xl rotate-12 -z-10"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="text-rgf-saffron font-bold uppercase text-[10px] md:text-sm tracking-[0.25em] mb-4 block">Our Heritage & Story</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight text-brand-dark">
              A Legacy of Pure Taste <br />& <span className="text-rgf-green italic">Unmatched Purity</span>
            </h2>
            
            <p className="text-base md:text-xl text-brand-dark/60 mb-8 md:mb-10 leading-relaxed font-medium">
              Rudransh Global Foods is a premium food processing company dedicated to delivering high-quality Indian spices. We focus on purity, hygiene, and the authentic "stone-ground" taste for customers across the globe.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 md:gap-5 mb-10 md:mb-14">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center justify-center lg:justify-start space-x-3 group">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-rgf-green/10 rounded-full flex items-center justify-center text-rgf-green shrink-0 group-hover:bg-rgf-green group-hover:text-white transition-all">
                    <CheckCircle2 size={12} strokeWidth={4} />
                  </div>
                  <span className="text-[11px] md:text-sm font-bold text-brand-dark/80 uppercase tracking-widest leading-none">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats - Responsive Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-10 pt-8 md:pt-10 border-t-2 border-rgf-sandy/50">
              <div className="text-center lg:text-left">
                <span className="block text-2xl md:text-4xl font-bold text-rgf-green">25+</span>
                <span className="text-[8px] md:text-[10px] font-bold uppercase text-brand-dark/40 tracking-[0.2em] mt-2 block">Years Heritage</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl md:text-4xl font-bold text-rgf-saffron">1M+</span>
                <span className="text-[8px] md:text-[10px] font-bold uppercase text-brand-dark/40 tracking-[0.2em] mt-2 block">Happy Families</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block text-2xl md:text-4xl font-bold text-rgf-red">50+</span>
                <span className="text-[8px] md:text-[10px] font-bold uppercase text-brand-dark/40 tracking-[0.2em] mt-2 block">Spice Blends</span>
              </div>
            </div>

            <Link to="/about" className="inline-block mt-12 md:mt-16 btn-primary w-full sm:w-auto shadow-2xl shadow-rgf-green/20">
              Read Our Full Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
