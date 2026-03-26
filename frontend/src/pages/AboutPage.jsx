import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, History, Award, Users, Target, Leaf, ShieldCheck, Globe } from 'lucide-react'
import heroSpices from '../assets/images/marketing/hero-spices.png'
import spiceProcessing from '../assets/images/marketing/spice-processing.png'

const AboutPage = () => {
  const stats = [
    { icon: <History size={24} className="text-rgf-saffron" />, label: 'Years Heritage', value: '25+' },
    { icon: <Award size={24} className="text-rgf-green" />, label: 'Certifications', value: '15+' },
    { icon: <Users size={24} className="text-rgf-blue" />, label: 'Happy Families', value: '1M+' },
    { icon: <Globe size={24} className="text-rgf-red" />, label: 'Countries Export', value: '10+' },
  ]

  const values = [
    { icon: <Target size={32} />, title: 'Our Mission', description: 'To deliver pure, authentic Indian spices preserving traditional flavors and essential oils with zero compromise.', color: 'bg-rgf-green' },
    { icon: <Leaf size={32} />, title: 'Pure Sourcing', description: 'Partnering directly with local farmers to select the finest grade raw materials for every batch.', color: 'bg-rgf-saffron' },
    { icon: <ShieldCheck size={32} />, title: 'Quality Promise', description: 'Each batch undergoes 50+ rigorous quality tests for purity, hygiene, and authentic taste.', color: 'bg-rgf-blue' },
  ]

  const highlights = [
    'Traditional sun-drying processing',
    'State-of-the-art hygienic packaging',
    'Directly sourced from premium farms',
    'No artificial colors or preservatives',
    'FSSAI certified and export quality',
    'Stone ground for authentic taste',
  ]

  return (
    <div className="pt-32 md:pt-40">
      {/* Banner */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-rgf-green to-rgf-green/80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroSpices} alt="" className="w-full h-full object-cover scale-150 blur-sm" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight"
          >
            About <span className="text-rgf-saffron italic">Rudransh</span> Global Foods
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-2xl max-w-2xl mx-auto font-medium"
          >
            Rooted in Tradition, Delivering Global Excellence.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 section-divider opacity-50"></div>
      </section>

      {/* Stats - Responsive */}
      <section className="-mt-12 md:-mt-16 relative z-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="kisan-card p-6 md:p-10 text-center shadow-2xl border-white"
              >
                <div className="flex justify-center mb-4">{React.cloneElement(stat.icon, { size: 32 })}</div>
                <span className="block text-3xl md:text-5xl font-bold text-brand-dark mb-1">{stat.value}</span>
                <span className="text-[10px] md:text-xs font-bold uppercase text-brand-dark/40 tracking-[0.2em]">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story - Responsive */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="relative order-2 lg:order-1"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-rgf-sandy group">
                <img 
                  src={spiceProcessing} 
                  alt="Quality Heritage" 
                  className="w-full aspect-square md:aspect-video lg:aspect-auto md:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rgf-green/60 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rgf-gold/10 rounded-full blur-2xl"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <span className="text-rgf-saffron font-bold uppercase text-[10px] md:text-sm tracking-[0.3em] mb-4 block">Our Legacy & Heritage</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-brand-dark">A Journey of Pure Taste & <span className="text-rgf-green italic">Absolute Trust</span></h2>
              <p className="text-base md:text-xl text-brand-dark/60 mb-6 leading-relaxed font-medium">Rudransh Global Foods is a premium food processing company delivering high-quality Indian spices. Our mission is to preserve the authentic aroma and taste of Indian kitchens for everyone.</p>
              <p className="text-base md:text-xl text-brand-dark/60 mb-10 leading-relaxed font-medium">Under the brand <strong className="text-rgf-red">"Kisan Hindustani Masale"</strong>, we bring spices sourced from carefully selected ingredients, ensuring that every meal prepared with RGF spices is a celebration of flavor.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 group">
                    <div className="w-6 h-6 bg-rgf-green/10 rounded-full flex items-center justify-center text-rgf-green shrink-0 group-hover:bg-rgf-green group-hover:text-white transition-all">
                      <CheckCircle2 size={14} strokeWidth={4} />
                    </div>
                    <span className="text-xs md:text-sm font-bold text-brand-dark/70 uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values - Responsive */}
      <section className="py-24 md:py-32 bg-rgf-sandy/20 relative overflow-hidden">
        <div className="section-divider absolute top-0 left-0 right-0 opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-rgf-green font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Core Principles</span>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-dark">What Drives Our <span className="text-rgf-saffron italic">Quality</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {values.map((val, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="kisan-card p-10 md:p-14 text-center group hover:-translate-y-4 shadow-2xl transition-all duration-500"
              >
                <div className={`w-20 h-20 ${val.color} text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:rotate-6 transition-all duration-500`}>
                  {React.cloneElement(val.icon, { size: 36 })}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-rgf-green transition-colors uppercase tracking-tight">{val.title}</h3>
                <p className="text-brand-dark/50 text-base md:text-lg font-medium leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
