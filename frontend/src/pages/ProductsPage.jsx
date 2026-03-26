import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Heart, Eye, Star, ShoppingBag, ChevronRight, Package, ArrowRight, ShieldCheck } from 'lucide-react'
import haldiImg from '../assets/images/products/haldi.png'
import mirchImg from '../assets/images/products/mirch.png'
import dhaniyaImg from '../assets/images/products/dhaniya.png'
import garamMasalaImg from '../assets/images/products/garam-masala-premium.png'
import sabjiMasalaImg from '../assets/images/products/sabji_masala.png'
import kitchenKingImg from '../assets/images/products/kitchen_king.png'
import teaMasalaImg from '../assets/images/products/tea_masala.png'
import meatMasalaImg from '../assets/images/products/meat_masala.png'
import freshAttaImg from '../assets/images/products/atta_fresh.png'
import sharbatiAttaImg from '../assets/images/products/atta_sharbati.png'

const ProductsPage = () => {
  const location = useLocation()
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const category = params.get('category')
    if (category) {
      // URLSearchParams.get already handles decoding
      setActiveCategory(category)
    } else {
      setActiveCategory('All')
    }
  }, [location.search])

  const categories = ['All', 'Pure Spices', 'Masala Blends', 'Atta & Flours', 'Combos']

  const products = [
    { id: 1, name: "Haldi Powder (Turmeric)", category: "Pure Spices", tagline: "शुद्ध और असली स्वाद", price: 85, oldPrice: 110, rating: 4.8, reviews: 124, image: haldiImg, tag: "Best Seller" },
    { id: 2, name: "Lal Mirch Powder", category: "Pure Spices", tagline: "तीखी और खुशबूदार", price: 120, oldPrice: 150, rating: 4.9, reviews: 89, image: mirchImg, tag: "Premium" },
    { id: 3, name: "Dhaniya Powder", category: "Pure Spices", tagline: "ताज़ी पिसी हुई सुगन्ध", price: 65, oldPrice: 90, rating: 4.7, reviews: 56, image: dhaniyaImg, tag: "Essential" },
    { id: 4, name: "Garam Masala", category: "Masala Blends", tagline: "Handcrafted Heritage Blend", price: 145, oldPrice: 180, rating: 5.0, reviews: 215, image: garamMasalaImg, tag: "Must Try" },
    { id: 5, name: "Sabji Masala", category: "Masala Blends", tagline: "All-Purpose Flavor Booster", price: 110, oldPrice: 130, rating: 4.8, reviews: 172, image: sabjiMasalaImg, tag: "Hot Pick" },
    { id: 6, name: "Kitchen King Masala", category: "Masala Blends", tagline: "The King of All Spices", price: 160, oldPrice: 200, rating: 5.0, reviews: 342, image: kitchenKingImg, tag: "Premium" },
    { id: 11, name: "Tea Masala", category: "Masala Blends", tagline: "Authentic Chai Kadak Blend", price: 95, oldPrice: 120, rating: 4.9, reviews: 88, image: teaMasalaImg, tag: "New" },
    { id: 12, name: "Meat Masala", category: "Masala Blends", tagline: "Rich Heritage Non-Veg Blend", price: 175, oldPrice: 220, rating: 5.0, reviews: 145, image: meatMasalaImg, tag: "Authentic" },
    { id: 7, name: "Chakki Fresh Atta", category: "Atta & Flours", tagline: "100% Whole Wheat, Zero Maida", price: 245, oldPrice: 280, rating: 4.9, reviews: 432, image: freshAttaImg, tag: "Daily Essential" },
    { id: 8, name: "MP Sharbati Atta (Premium)", category: "Atta & Flours", tagline: "Gold Quality Sweet Grains", price: 340, oldPrice: 380, rating: 5.0, reviews: 112, image: sharbatiAttaImg, tag: "Premium Choice" },
    { id: 9, name: "Essential Spice Combo", category: "Combos", tagline: "Turmeric + Chilli + Coriander", price: 299, oldPrice: 350, rating: 4.8, reviews: 92, image: haldiImg, tag: "Super Value" },
  ]

  const filteredProducts = products.filter(p => 
    (activeCategory === 'All' || p.category === activeCategory) &&
    (p.name.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="pt-32 md:pt-40 pb-20">
      <section className="bg-rgf-cream py-10 md:py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 section-divider opacity-50"></div>
        <div className="container mx-auto px-4 md:px-10 relative z-10 text-center">
            <h1 className="text-4xl md:text-7xl font-bold mb-8 text-brand-dark uppercase tracking-tight leading-none">
              Pure <span className="text-rgf-green italic">Heritage</span> Foods
            </h1>
            
            <div className="max-w-3xl mx-auto mb-10 px-2">
               <div className="relative group">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-dark/20 group-focus-within:text-rgf-green transition-colors" size={20} />
                  <input 
                    type="text" 
                    placeholder="Search products..."
                    className="w-full bg-white border-2 border-rgf-sandy rounded-full py-4 pl-14 pr-6 text-base focus:outline-none focus:border-rgf-green transition-all shadow-xl shadow-rgf-gold/5"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
               </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3">
               {categories.map(cat => (
                 <button 
                   key={cat}
                   onClick={() => setActiveCategory(cat)}
                   className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border-2 ${
                     activeCategory === cat 
                       ? 'bg-rgf-green text-white border-rgf-green shadow-xl scale-105' 
                       : 'bg-white text-brand-dark border-rgf-sandy hover:bg-rgf-sandy/50'
                   }`}
                 >
                   {cat}
                 </button>
               ))}
            </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 section-divider opacity-50"></div>
      </section>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-14">
            <AnimatePresence mode='popLayout'>
              {filteredProducts.map((product, i) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group"
                >
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 relative transition-all duration-700 group-hover:-translate-y-4 shadow-3xl border border-rgf-sandy group-hover:border-rgf-gold/30 bg-white p-6">
                    <div className="absolute top-0 right-0 bg-rgf-green text-white py-1.5 px-6 rotate-45 translate-x-8 translate-y-3 shadow-lg z-20">
                        <span className="text-[10px] font-bold uppercase tracking-widest">RGF Brand</span>
                    </div>

                    <img 
                       src={product.image} 
                       alt={product.name} 
                       className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    <div className="absolute top-8 left-8 z-20">
                       <span className="bg-brand-dark/90 backdrop-blur-sm px-4 py-2 rounded-xl text-[10px] font-bold uppercase text-rgf-saffron shadow-xl border border-white/5 tracking-widest leading-none">
                         {product.tag}
                       </span>
                    </div>

                    <div className="absolute left-8 right-8 bottom-8 translate-y-24 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-30">
                       <button className="w-full bg-rgf-green text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-3 shadow-2xl hover:bg-rgf-orange transition-all scale-105 active:scale-95 leading-none">
                          <ShoppingBag size={20} strokeWidth={3} />
                          <span>Add to Basket</span>
                       </button>
                    </div>
                  </div>

                  <div className="px-4 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                       <div className="flex">
                          {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-rgf-gold fill-rgf-gold" />)}
                       </div>
                       <span className="text-[10px] font-bold text-brand-dark/30 uppercase tracking-widest ml-2">Premium Quality</span>
                    </div>
                    <Link to={`/products/${product.id}`}>
                      <h3 className="text-3xl font-bold text-brand-dark mb-1 transition-colors group-hover:text-rgf-green uppercase tracking-tight leading-none">{product.name}</h3>
                    </Link>
                    <p className="text-xs font-bold text-brand-dark/40 mb-6 uppercase tracking-[0.3em] leading-none">{product.tagline}</p>
                    <div className="flex items-center justify-center md:justify-start space-x-4">
                      <span className="text-4xl font-bold text-rgf-green leading-none tracking-tighter">₹{product.price}</span>
                      <span className="text-lg font-bold text-brand-dark/10 line-through leading-none">₹{product.oldPrice}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="mt-20 py-28 bg-brand-dark rounded-[5rem] text-white overflow-hidden relative mx-6 md:mx-14 shadow-4xl mb-24">
         <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-rgf-green/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
         <div className="container mx-auto px-10 relative z-10 text-center lg:text-left">
             <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div>
                   <h2 className="text-5xl md:text-8xl font-bold mb-10 uppercase leading-[0.9] tracking-tighter">Bulk <br/><span className="text-rgf-green italic">Export</span> Ready</h2>
                   <p className="text-white/40 text-2xl font-medium mb-16 max-w-xl mx-auto lg:mx-0 leading-relaxed">Manufacturers of 'Kisan Hindustani Masale'. International quality export supply for global markets.</p>
                   <Link to="/contact" className="btn-secondary scale-125 inline-flex items-center space-x-5 py-6 px-12 shadow-3xl shadow-black/20">
                      <span className="font-bold uppercase tracking-[0.3em] text-lg">Inquire Now</span>
                      <ArrowRight size={24} />
                   </Link>
                </div>
                <div className="hidden lg:grid grid-cols-2 gap-8 relative rotate-2">
                      <div className="bg-white p-8 rounded-[3rem] shadow-3xl">
                         <img src={haldiImg} className="w-full h-48 object-contain" alt="" />
                      </div>
                      <div className="bg-white p-8 rounded-[3rem] shadow-3xl transform -translate-y-8">
                         <img src={sharbatiAttaImg} className="w-full h-48 object-contain" alt="" />
                      </div>
                </div>
             </div>
         </div>
      </section>
    </div>
  )
}

export default ProductsPage
