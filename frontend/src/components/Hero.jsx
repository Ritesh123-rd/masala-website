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
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-rgf-saffron/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-rgf-green/5 rounded-full blur-[120px] animate-pulse delay-700"></div>
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm66-3c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-46-43c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0-20c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z' fill='%23145A32' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-white/40 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/50 mb-10 shadow-sm">
               <Leaf size={18} className="text-rgf-green animate-bounce" />
               <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.25em] text-rgf-green drop-shadow-sm">ISO Certified Quality</span>
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold leading-[0.85] mb-10 text-brand-dark uppercase tracking-tight">
               Experience <br/>
               <span className="text-rgf-green underline decoration-rgf-green/10 underline-offset-[12px] italic tracking-[0.05em]">Pure Taste</span> <br/>
               of India
            </h1>

            <p className="text-brand-dark/50 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-12 font-medium leading-relaxed uppercase tracking-[0.1em]">
               The Heritage House of Premium Spices, Fresh Chakki Atta, and Traditional Indian Delicacies Crafted for the Global Kitchen.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <Link to="/products" className="btn-secondary w-full sm:w-auto shadow-4xl shadow-rgf-saffron/30 scale-105 active:scale-95 leading-none py-6 px-14 group">
                 <span className="font-bold uppercase tracking-[0.3em] text-lg">Order Online</span>
                 <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="px-10 py-5 text-brand-dark/40 border-2 border-brand-dark/10 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-brand-dark hover:text-white transition-all shadow-xl active:scale-95">
                 Bulk Inquiry
              </Link>
            </div>

            {/* Micro Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-10 mt-16 pt-10 border-t border-brand-dark/10">
               <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-rgf-orange/10 rounded-2xl flex items-center justify-center text-rgf-orange"><ShieldCheck size={28} /></div>
                  <div className="flex flex-col"><span className="text-xs font-black uppercase tracking-tight text-brand-dark leading-none">100% Shuddh</span><span className="text-[9px] font-bold text-brand-dark/30 uppercase tracking-widest">Natural</span></div>
               </div>
               <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-rgf-green/10 rounded-2xl flex items-center justify-center text-rgf-green"><Award size={28} /></div>
                  <div className="flex flex-col"><span className="text-xs font-black uppercase tracking-tight text-brand-dark leading-none">Export Quality</span><span className="text-[9px] font-bold text-brand-dark/30 uppercase tracking-widest">Certified</span></div>
               </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-square md:aspect-[5/4] flex items-center justify-center p-8">
              <img 
                 src={heroSpices} 
                 alt="Premium Indian Spices" 
                 className="w-full h-full object-contain filter drop-shadow-[0_50px_100px_rgba(0,0,0,0.5)] transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
