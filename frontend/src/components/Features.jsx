import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, Factory, ShieldCheck, Truck } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Leaf size={40} />,
      title: "100% Pure Ingredients",
    },
    {
      icon: <Factory size={40} />,
      title: "Modern Manufacturing Unit",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Quality Tested Products",
    },
    {
      icon: <Truck size={40} />,
      title: "Fast Delivery Across India.",
    },
  ]

  return (
    <section className="py-20 bg-white selection:bg-rgf-green selection:text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center space-x-4 mb-4">
             <div className="h-px w-16 bg-rgf-saffron"></div>
             <h2 className="text-3xl md:text-5xl font-black text-brand-dark uppercase tracking-tight">Why Choose <span className="text-rgf-green italic">Rudransh</span> Global Foods?</h2>
             <div className="h-px w-16 bg-rgf-saffron"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-rgf-green/5 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-rgf-green group-hover:bg-rgf-green group-hover:text-white transition-all duration-500 shadow-xl shadow-rgf-green/10">
                 <div className="text-rgf-green group-hover:text-white transition-colors duration-500">
                    {feature.icon}
                 </div>
              </div>
              <h3 className="text-sm md:text-xl font-black text-brand-dark uppercase tracking-tighter leading-tight max-w-[150px] mx-auto group-hover:text-rgf-green transition-colors">
                 {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features