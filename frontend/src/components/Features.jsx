import React from 'react'
import { motion } from 'framer-motion'
<<<<<<< HEAD
import { Sprout, Briefcase, Box, ShieldCheck } from 'lucide-react'
=======
import { Target, ShieldCheck, Globe, Truck } from 'lucide-react'
>>>>>>> f091a5b48e23b94a4de958a4b6418ecd92262291

const Features = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: <Sprout size={32} />,
      title: "Premium Raw Material",
      description: "Directly sourced from the finest Indian farms.",
      color: "bg-rgf-green",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Hygienic Processing",
      description: "State-of-the-art facilities for maximum purity.",
      color: "bg-rgf-saffron",
    },
    {
      icon: <Box size={32} />,
      title: "Aroma Lock Packaging",
      description: "Smart packaging to preserve natural essential oils.",
      color: "bg-rgf-blue",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "100% Trusted Brand",
      description: "Delivering excellence with global food standards.",
      color: "bg-rgf-red",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-rgf-sandy/30 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rgf-gold/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rgf-green/5 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>

      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 section-divider opacity-50"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-rgf-green font-bold text-[10px] md:text-sm uppercase tracking-[0.3em] mb-4 block">Quality & Standards</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-dark">
            Why Choose <br className="sm:hidden" />
            <span className="text-rgf-saffron italic">Rudransh</span> Global Foods?
          </h2>
          <p className="text-base md:text-xl text-brand-dark/50 font-medium">
            We preserve the authentic "Indian Kisan" legacy through advanced technology and traditional care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
=======
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
>>>>>>> f091a5b48e23b94a4de958a4b6418ecd92262291
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
<<<<<<< HEAD
              className="kisan-card p-8 md:p-10 text-center group hover:-translate-y-3 shadow-[0_15px_30px_-15px_rgba(0,0,0,0.05)] border-transparent hover:border-rgf-gold/20"
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 ${feature.color} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.1)] group-hover:rotate-6 transition-all duration-500`}>
                {React.cloneElement(feature.icon, { className: "w-8 h-8 md:w-10 md:h-10" })}
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-brand-dark mb-3 md:mb-4 group-hover:text-rgf-green transition-colors uppercase tracking-tight">{feature.title}</h3>
              <p className="text-sm md:text-base text-brand-dark/50 leading-relaxed font-medium">{feature.description}</p>
=======
              className="bg-white p-10 lg:p-12 rounded-[3.5rem] shadow-4xl border border-rgf-sandy group hover:-translate-y-4 transition-all duration-700"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-dark/5 rounded-3xl flex items-center justify-center text-rgf-green mb-10 group-hover:bg-rgf-green group-hover:text-white transition-all duration-500 shadow-xl shadow-rgf-green/5">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-brand-dark mb-6 uppercase tracking-tighter leading-tight">{feature.title}</h3>
              <p className="text-[10px] md:text-xs font-bold text-brand-dark/30 uppercase tracking-[0.1em] leading-relaxed">{feature.desc}</p>
>>>>>>> f091a5b48e23b94a4de958a4b6418ecd92262291
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider opacity-50"></div>
    </section>
  )
}

export default Features