import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, Star, ArrowRight } from 'lucide-react'

// Import assets from src
import haldiImg from '../assets/images/products/haldi.png'
import freshAttaImg from '../assets/images/products/atta_fresh.png'
import garamMasalaImg from '../assets/images/products/garam-masala-premium.png'
import sharbatiAttaImg from '../assets/images/products/atta_sharbati.png'

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Haldi Powder",
      tagline: "शुद्ध हल्दी पाउडर",
      price: "₹85",
      oldPrice: "₹110",
      rating: 4.8,
      reviews: 124,
      image: haldiImg,
      tag: "Best Seller"
    },
    {
      id: 7,
      name: "Chakki Fresh Atta",
      tagline: "100% Shuddh Gehun",
      price: "₹245",
      oldPrice: "₹280",
      rating: 4.9,
      reviews: 432,
      image: freshAttaImg,
      tag: "Daily Choice"
    },
    {
      id: 4,
      name: "Garam Masala",
      tagline: "Heritage Blend",
      price: "₹145",
      oldPrice: "₹180",
      rating: 5.0,
      reviews: 215,
      image: garamMasalaImg,
      tag: "Must Try"
    },
    {
      id: 8,
      name: "MP Sharbati Atta",
      tagline: "Premium Gold Quality",
      price: "₹340",
      oldPrice: "₹380",
      rating: 5.0,
      reviews: 112,
      image: sharbatiAttaImg,
      tag: "Expert Choice"
    }
  ]

  return (
    <section id="products" className="py-20 md:py-28 bg-white relative">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-20 gap-8 text-center lg:text-left">
           <div className="max-w-3xl mx-auto lg:mx-0">
             <span className="text-rgf-green font-bold text-xs uppercase tracking-[0.25em] mb-4 block underline decoration-rgf-green/20 underline-offset-8">Featured Store</span>
             <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold leading-[0.9] text-brand-dark uppercase tracking-tighter">
                Premium <br />
                <span className="text-rgf-orange italic underline decoration-rgf-orange/10 underline-offset-4 tracking-[0.05em]">Branded</span> Foods
             </h2>
           </div>
           <Link to="/products" className="btn-secondary flex items-center space-x-4 w-full sm:w-auto shadow-3xl shadow-rgf-orange/20 group text-center justify-center lg:mb-4 leading-none py-6 px-12 scale-110">
              <span className="font-bold uppercase tracking-[0.2em] text-lg">Browse Store</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 relative transition-all duration-700 group-hover:-translate-y-4 shadow-3xl border border-rgf-sandy group-hover:border-rgf-gold/30 bg-white p-6">
                
                {/* corner Badge */}
                <div className="absolute top-0 right-0 bg-rgf-green text-white py-1.5 px-6 rotate-45 translate-x-8 translate-y-3 shadow-lg z-20">
                    <span className="text-[10px] font-bold uppercase tracking-widest leading-none">RGF Brand</span>
                </div>

                <img 
                   src={product.image} 
                   alt={product.name} 
                   className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110"
                />
                
                <div className="absolute top-8 left-8 z-20">
                   <span className="bg-brand-dark/95 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-bold uppercase text-rgf-saffron shadow-2xl border border-white/5 tracking-[0.2em] leading-none">
                     {product.tag}
                   </span>
                </div>

                <div className="absolute bottom-8 left-8 right-8 translate-y-24 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-30">
                   <button className="w-full bg-rgf-green text-white py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center space-x-3 shadow-3xl hover:bg-rgf-orange transition-all scale-105 active:scale-95">
                      <ShoppingBag size={20} />
                      <span>Add to Basket</span>
                   </button>
                </div>
              </div>

              <div className="px-4 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start space-x-1 mb-4">
                   <div className="flex">
                      {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-rgf-gold fill-rgf-gold" />)}
                   </div>
                   <span className="text-[9px] md:text-[10px] font-bold text-brand-dark/30 uppercase tracking-[0.2em] ml-2">Verified Pure</span>
                </div>
                <Link to={`/products/${product.id}`}>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mb-1 transition-colors group-hover:text-rgf-green uppercase tracking-tighter leading-none">{product.name}</h3>
                </Link>
                <p className="text-[10px] md:text-xs font-bold text-brand-dark/40 mb-6 uppercase tracking-[0.2em] leading-none">{product.tagline}</p>
                <div className="flex items-center justify-center sm:justify-start space-x-4">
                  <span className="text-4xl md:text-5xl font-bold text-rgf-green leading-none tracking-tighter">{product.price}</span>
                  <span className="text-lg md:text-xl font-bold text-brand-dark/10 line-through leading-none">{product.oldPrice}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
