import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Leaf, ShieldCheck, Award, ArrowRight } from 'lucide-react'
import heroSpices from '../assets/images/marketing/hero-spices.png'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 md:pt-44 pb-12 md:pb-20">
      {/* Background - Warm Sandy Indian Style */}
      <div className="absolute inset-0 bg-gradient-to-br from-rgf-sandy via-rgf-cream to-rgf-sandy overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
          <img 
            src={heroSpices} 
            alt="" 
            className="w-full h-full object-cover opacity-15 lg:opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-rgf-sandy/80 to-rgf-sandy"></div>
        </div>
        {/* Decorative Indian border pattern top */}
        <div className="absolute top-[80px] md:top-[112px] left-0 right-0 section-divider opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-rgf-green/10 border border-rgf-green/20 text-rgf-green px-4 py-1.5 rounded-full mb-6">
              <Leaf size={14} strokeWidth={3} />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">100% Pure & Organic Spices</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.15] mb-6 text-brand-dark">
              Pure Taste of{' '}
              <span className="text-rgf-saffron italic underline decoration-rgf-saffron/20 underline-offset-8">India</span>,{' '}
              <br className="hidden md:block" />
              Delivered{' '}
              <span className="text-rgf-green italic">Globally</span>
            </h1>
            
            <p className="text-base md:text-xl text-brand-dark/70 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Rudransh Global Foods brings the authentic <strong className="text-rgf-green">"Kisan Hindustani Masale"</strong> heritage to your kitchen. Experience the rich aroma of stone-ground, naturally dried premium spices.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Link to="/products" className="btn-secondary w-full sm:w-auto flex items-center justify-center space-x-2 shadow-2xl shadow-rgf-orange/30">
                <span>View Products</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn-primary w-full sm:w-auto flex items-center justify-center space-x-2 shadow-2xl shadow-rgf-green/20">
                <span>Enquiry Now</span>
              </Link>
            </div>
            
            {/* Trust Badges - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t-2 border-rgf-sandy/50">
              <div className="flex items-center justify-center lg:justify-start space-x-3 bg-white/50 backdrop-blur-sm px-4 py-3 rounded-2xl border border-rgf-sandy">
                <ShieldCheck size={24} className="text-rgf-green shrink-0" />
                <div className="text-left">
                  <span className="block text-xs font-bold text-brand-dark uppercase tracking-tight">FSSAI Certified</span>
                  <span className="text-[10px] font-bold text-brand-dark/40 uppercase">Quality Tested</span>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 bg-white/50 backdrop-blur-sm px-4 py-3 rounded-2xl border border-rgf-sandy">
                <Award size={24} className="text-rgf-saffron shrink-0" />
                <div className="text-left">
                  <span className="block text-xs font-bold text-brand-dark uppercase tracking-tight">Export Quality</span>
                  <span className="text-[10px] font-bold text-brand-dark/40 uppercase">Global Standards</span>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3 bg-white/50 backdrop-blur-sm px-4 py-3 rounded-2xl border border-rgf-sandy">
                <Leaf size={24} className="text-rgf-green shrink-0" />
                <div className="text-left">
                  <span className="block text-xs font-bold text-brand-dark uppercase tracking-tight">100% Natural</span>
                  <span className="text-[10px] font-bold text-brand-dark/40 uppercase">No Additives</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image Section - Optimized for all screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(212,160,23,0.3)] border-4 border-rgf-gold/30 group">
              <img 
                src={heroSpices} 
                alt="Premium Indian Spices Collection" 
                className="w-full aspect-square md:aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
              
              {/* Floating Text Overlay */}
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 text-white">
                <p className="font-playfair text-2xl md:text-4xl italic mb-2 leading-tight">"शुद्ध, असली और बेमिसाल"</p>
                <p className="text-white/60 text-xs md:text-base font-bold uppercase tracking-widest">Pure Taste of India — Rudransh Global Foods</p>
              </div>
            </div>

            {/* Floating Circular Badge */}
            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 md:-right-10 bg-rgf-red text-white w-24 h-24 md:w-36 md:h-36 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-rgf-gold z-20"
            >
              <div className="text-center font-bold">
                <span className="block text-[8px] md:text-[10px] uppercase tracking-widest text-white/70">Heritage</span>
                <span className="block text-xl md:text-3xl leading-none">SINCE</span>
                <span className="block text-xl md:text-3xl text-rgf-gold leading-none">2025</span>
              </div>
            </motion.div>
            
            {/* Background geometric shapes for depth */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rgf-saffron/10 blur-3xl rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Wave/Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider"></div>
    </section>
  )
}

export default Hero
