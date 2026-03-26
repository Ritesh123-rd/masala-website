import React from 'react'
import { motion } from 'framer-motion'
import { Target, ShieldCheck, Globe, Truck } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 md:w-10 md:h-10" />,
      title: 'Precision Processing',
      desc: 'Using low-temperature grinding to preserve essential oils and aroma.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />,
      title: 'Purity Assured',
      desc: 'Rigorous multi-stage lab testing for zero adulteration and safe consumption.'
    },
    {
      icon: <Globe className="w-8 h-8 md:w-10 md:h-10" />,
      title: 'Global Export',
      desc: 'Meeting international food safety standards for logistics across the globe.'
    },
    {
      icon: <Truck className="w-8 h-8 md:w-10 md:h-10" />,
      title: 'Direct Supply',
      desc: 'From our manufacturing unit straight to your retail or industrial kitchen.'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-rgf-cream relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-rgf-green font-black text-xs uppercase tracking-[0.3em] mb-4 block opacity-60">The RGF Advantage</span>
          <h2 className="text-4xl md:text-7xl font-bold leading-[0.9] text-brand-dark uppercase tracking-tighter">
            Why Choose Our <br/>
            <span className="text-rgf-saffron italic underline decoration-rgf-saffron/10 underline-offset-8 tracking-[0.05em]">Trusted</span> Quality
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 lg:p-12 rounded-[3.5rem] shadow-4xl border border-rgf-sandy group hover:-translate-y-4 transition-all duration-700"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-dark/5 rounded-3xl flex items-center justify-center text-rgf-green mb-10 group-hover:bg-rgf-green group-hover:text-white transition-all duration-500 shadow-xl shadow-rgf-green/5">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-brand-dark mb-6 uppercase tracking-tighter leading-tight">{feature.title}</h3>
              <p className="text-[10px] md:text-xs font-bold text-brand-dark/30 uppercase tracking-[0.1em] leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features