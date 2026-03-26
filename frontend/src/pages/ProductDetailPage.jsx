import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ShoppingBag, Heart, Share2, Truck, ShieldCheck, ChevronRight, Minus, Plus, Info, List, ChefHat } from 'lucide-react'
import packAllSpices from '../assets/images/marketing/packaging-all-spices.png'
import packGaramMasala from '../assets/images/marketing/packaging-garam-masala.png'
import packGaramMasalaBack from '../assets/images/marketing/packaging-garam-masala-back.jpg'
import spiceProcessing from '../assets/images/marketing/spice-processing.png'

const ProductDetailPage = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [selectedImage, setSelectedImage] = useState(0)

  const products = [
    { 
      id: 1, 
      name: "Haldi Powder (Turmeric)", 
      category: "Pure Spices", 
      tagline: "High Curcumin Content", 
      price: 85, 
      oldPrice: 110, 
      rating: 4.8, 
      reviews: 124, 
      images: [packAllSpices],
      description: "Our Haldi Powder is sourced from the finest turmeric roots, ensuring high curcumin content for health and vibrant color for your dishes.",
      features: ["No Added Colors", "Rich in Curcumin", "Sun Dried & Stone Ground"],
      nutrition: { energy: "320 kcal", protein: "8g", fat: "9g", carbs: "65g" }
    },
    { 
      id: 4, 
      name: "Garam Masala", 
      category: "Masala Blends", 
      tagline: "Handcrafted Heritage Blend", 
      price: 145, 
      oldPrice: 180, 
      rating: 5.0, 
      reviews: 215, 
      images: [packGaramMasala, packGaramMasalaBack],
      description: "A secret family recipe passed down through generations. Our Garam Masala is a perfect blend of 12+ premium spices, toasted and ground to perfection.",
      features: ["12+ Spice Blend", "No Fillers", "Aromatic & Flavorful"],
      nutrition: { energy: "320 kcal", protein: "11g", fat: "12g", carbs: "45g" }
    },
    { 
      id: 5, 
      name: "Sabji Masala", 
      category: "Masala Blends", 
      tagline: "All-Purpose Flavor Booster", 
      price: 110, 
      oldPrice: 130, 
      rating: 4.8, 
      reviews: 172, 
      images: [packGaramMasala],
      description: "Make every vegetable dish a masterpiece. Our Sabji Masala enhances the natural flavors while adding a mild, savory depth.",
      features: ["Versatile Blend", "Authentic Sourcing", "Rich Aroma"],
      nutrition: { energy: "310 kcal", protein: "9g", fat: "10g", carbs: "50g" }
    },
    { 
      id: 6, 
      name: "Kitchen King Masala", 
      category: "Masala Blends", 
      tagline: "The King of All Spices", 
      price: 160, 
      oldPrice: 200, 
      rating: 5.0, 
      reviews: 342, 
      images: [packGaramMasala],
      description: "A bold, powerful blend that truly lives up to its name. Perfect for heavy gravies and royal Indian cuisines.",
      features: ["Bold Spicy Notes", "Premium Ingredients", "Chef's Choice"],
      nutrition: { energy: "340 kcal", protein: "12g", fat: "15g", carbs: "40g" }
    },
    { id: 7, name: "Chakki Fresh Atta", category: "Atta & Flours", tagline: "100% Whole Wheat", price: 245, oldPrice: 280, rating: 4.9, reviews: 432, images: [spiceProcessing], description: "Freshly ground whole wheat flour for softest rotis.", features: ["Zero Maida", "Iron Rich", "Soft Rotis"], nutrition: { energy: "360 kcal", protein: "13g", fat: "2g", carbs: "72g" } },
  ]

  const product = products.find(p => p.id === parseInt(id)) || products[0]

  return (
    <div className="pt-32 md:pt-44 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-[10px] md:text-sm mb-10 overflow-x-auto whitespace-nowrap pb-2">
           <Link to="/" className="text-brand-dark/40 hover:text-rgf-green uppercase font-bold tracking-widest">Home</Link>
           <ChevronRight size={14} className="text-brand-dark/20" />
           <Link to="/products" className="text-brand-dark/40 hover:text-rgf-green uppercase font-bold tracking-widest">{product.category}</Link>
           <ChevronRight size={14} className="text-brand-dark/20" />
           <span className="text-brand-dark uppercase font-bold tracking-widest">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-square rounded-[3rem] overflow-hidden bg-white border-2 border-rgf-sandy shadow-2xl p-10 flex items-center justify-center group relative">
               <motion.img 
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
               />
               
               {/* Brand Ribbon in Detail */}
               <div className="absolute top-1/2 left-0 right-0 py-3 bg-rgf-green/90 backdrop-blur-md -rotate-[30deg] -translate-x-12 translate-y-12 shadow-2xl border-y border-white/20 pointer-events-none group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-700">
                  <p className="text-[10px] md:text-[14px] text-center font-bold text-white uppercase tracking-[0.5em] font-outfit">Rudransh Global Foods</p>
               </div>
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-4">
                {product.images.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setSelectedImage(i)}
                    className={`w-24 h-24 rounded-2xl shrink-0 overflow-hidden border-2 p-2 bg-white transition-all ${
                      selectedImage === i ? 'border-rgf-green shadow-xl scale-105' : 'border-rgf-sandy opacity-60'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-rgf-green/10 text-rgf-green px-4 py-2 rounded-full mb-4">
                 <ChefHat size={16} />
                 <span className="text-xs font-bold uppercase tracking-widest">Premium Heritage Quality</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-brand-dark mb-4 uppercase tracking-tight leading-tight">{product.name}</h1>
              <p className="text-brand-dark/40 text-sm md:text-xl font-bold uppercase tracking-[0.25em]">{product.tagline}</p>
              
              <div className="flex items-center space-x-6 mt-8">
                 <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-rgf-gold fill-rgf-gold" />)}
                 </div>
                 <span className="text-brand-dark/40 font-bold text-sm">({product.reviews} Reviews)</span>
              </div>
            </div>

            <div className="flex items-baseline space-x-4">
               <span className="text-5xl md:text-7xl font-bold text-rgf-green">₹{product.price}</span>
               <span className="text-2xl md:text-3xl text-brand-dark/20 line-through font-bold">₹{product.oldPrice}</span>
            </div>

            <p className="text-brand-dark/60 text-base md:text-2xl leading-relaxed font-medium">{product.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-10">
              <div className="flex items-center bg-rgf-cream border-2 border-rgf-sandy rounded-2xl px-2">
                 <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="w-14 h-14 flex items-center justify-center text-brand-dark hover:text-rgf-green transition-colors"><Minus size={24} strokeWidth={3} /></button>
                 <span className="w-14 text-center font-bold text-2xl">{quantity}</span>
                 <button onClick={() => setQuantity(quantity + 1)} className="w-14 h-14 flex items-center justify-center text-brand-dark hover:text-rgf-green transition-colors"><Plus size={24} strokeWidth={3} /></button>
              </div>
              <button className="flex-1 btn-secondary py-5 flex items-center justify-center space-x-3 shadow-2xl shadow-rgf-orange/40 group scale-105">
                 <ShoppingBag size={28} className="group-hover:translate-y-[-2px] transition-transform" />
                 <span className="font-bold uppercase tracking-[0.2em] text-xl">Add to Basket</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-12 border-t border-rgf-sandy">
              <div className="flex items-center space-x-4">
                 <div className="w-12 h-12 bg-rgf-green/10 rounded-2xl flex items-center justify-center text-rgf-green"><Truck size={24} /></div>
                 <span className="text-xs font-bold uppercase tracking-widest text-brand-dark/60">Fast Pan-India Delivery</span>
              </div>
              <div className="flex items-center space-x-4">
                 <div className="w-12 h-12 bg-rgf-green/10 rounded-2xl flex items-center justify-center text-rgf-green"><ShieldCheck size={24} /></div>
                 <span className="text-xs font-bold uppercase tracking-widest text-brand-dark/60">Verified Pure Lab Tested</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
