import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Minus, Plus, X, ShoppingCart, ArrowRight, ShieldCheck, Truck, ChevronRight } from 'lucide-react'
import packAllSpices from '../assets/images/marketing/packaging-all-spices.png'
import packGaramMasala from '../assets/images/marketing/packaging-garam-masala.png'

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Haldi Powder (Turmeric)",
      weight: "100g",
      price: 85,
      quantity: 2,
      image: packAllSpices,
    },
    {
      id: 4,
      name: "Garam Masala (Premium)",
      weight: "100g",
      price: 145,
      quantity: 1,
      image: packGaramMasala,
    },
  ])

  const updateQuantity = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 500 ? 0 : 50
  const total = subtotal + shipping

  return (
    <div className="pt-32 md:pt-44 pb-16 min-h-screen bg-rgf-cream/10">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-[10px] md:text-sm mb-10 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="text-brand-dark/40 hover:text-rgf-green font-bold uppercase tracking-widest">Home</Link>
          <ChevronRight size={14} className="text-brand-dark/20" />
          <span className="text-rgf-green font-bold uppercase tracking-widest leading-none">Your Basket</span>
        </nav>

        <h1 className="text-4xl md:text-7xl font-bold mb-10 text-brand-dark uppercase tracking-tight leading-none">
          Checkout <span className="text-rgf-green italic">Queue</span>
        </h1>

        {cartItems.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 bg-white rounded-[3rem] border-2 border-rgf-sandy border-dashed shadow-2xl shadow-rgf-gold/5"
          >
            <div className="w-24 h-24 bg-rgf-cream rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart size={40} className="text-brand-dark/20" />
            </div>
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-tighter">Your basket is empty</h2>
            <p className="text-brand-dark/40 mb-8 font-medium text-lg">Looks like you haven't added any spices yet.</p>
            <Link to="/products" className="btn-primary inline-flex items-center space-x-3 scale-110">
              <span className="font-bold uppercase tracking-widest">Start Shopping Now</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-6 md:p-8 rounded-[2.5rem] border-2 border-rgf-sandy flex flex-col sm:flex-row items-center gap-8 group hover:shadow-3xl hover:border-rgf-green/20 transition-all"
                >
                  <Link to={`/products/${item.id}`} className="w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden shrink-0 border-2 border-rgf-sandy bg-white p-4 shadow-xl relative">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                    
                    {/* Brand Banner */}
                    <div className="absolute top-1/2 left-0 right-0 bg-rgf-green py-0.5 -rotate-45 -translate-x-6">
                       <p className="text-[6px] text-center text-white uppercase font-bold tracking-widest">RGF Product</p>
                    </div>
                  </Link>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <span className="text-[10px] font-bold text-rgf-green uppercase tracking-widest mb-2 block">Rudransh Global Foods</span>
                    <Link to={`/products/${item.id}`}>
                      <h3 className="text-xl md:text-3xl font-bold text-brand-dark hover:text-rgf-green transition-colors uppercase tracking-tight leading-none mb-3">{item.name}</h3>
                    </Link>
                    <p className="text-xs font-bold text-brand-dark/30 uppercase tracking-[0.2em]">Net Weight: {item.weight}</p>
                  </div>

                  <div className="flex flex-col items-center sm:items-end justify-between min-h-[100px] gap-4">
                      <div className="flex items-center bg-rgf-cream border-2 border-rgf-sandy rounded-2xl h-12">
                        <button onClick={() => updateQuantity(item.id, -1)} className="px-4 text-brand-dark/40 hover:text-rgf-green transition-colors"><Minus size={18} strokeWidth={3} /></button>
                        <span className="w-10 text-center font-bold text-xl">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="px-4 text-brand-dark/40 hover:text-rgf-green transition-colors"><Plus size={18} strokeWidth={3} /></button>
                      </div>

                      <div className="flex items-center space-x-6">
                        <div className="text-right">
                           <p className="text-[10px] text-brand-dark/30 font-bold uppercase tracking-widest">Total Price</p>
                           <span className="text-2xl md:text-4xl font-bold text-rgf-green leading-none">₹{item.price * item.quantity}</span>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="w-12 h-12 flex items-center justify-center text-brand-dark/20 hover:text-rgf-red hover:bg-rgf-red/5 rounded-2xl transition-all border border-transparent hover:border-rgf-red/10"
                        >
                          <X size={24} strokeWidth={3} />
                        </button>
                      </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border-2 border-rgf-sandy shadow-2xl sticky top-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-rgf-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-10 uppercase tracking-tighter leading-none">Summary</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex justify-between text-brand-dark/50">
                    <span className="text-xs font-bold uppercase tracking-widest">Subtotal ({cartItems.length} items)</span>
                    <span className="font-bold text-brand-dark text-lg">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-brand-dark/50 pb-4 border-b border-rgf-sandy border-dashed">
                    <span className="text-xs font-bold uppercase tracking-widest">Delivery Fee</span>
                    <span className="font-bold text-brand-dark text-lg">{shipping === 0 ? <span className="text-rgf-green">FREE</span> : `₹${shipping}`}</span>
                  </div>
                  
                  {shipping > 0 && (
                    <div className="bg-rgf-green/5 p-5 rounded-3xl border border-rgf-green/20">
                       <p className="text-[10px] md:text-xs text-rgf-green font-bold uppercase tracking-[0.2em] text-center mb-1">Unlock FREE Delivery</p>
                       <p className="text-brand-dark/60 text-[10px] text-center font-medium">Add ₹{500 - subtotal} more to your basket</p>
                    </div>
                  )}
                </div>

                <div className="mb-10">
                  <div className="flex justify-between items-end">
                    <span className="text-xs font-bold text-brand-dark/30 uppercase tracking-[0.3em] leading-none mb-1">Payable Amount</span>
                    <span className="text-4xl md:text-6xl font-bold text-rgf-green leading-none tracking-tighter">₹{total}</span>
                  </div>
                </div>

                <button className="w-full btn-secondary h-20 flex items-center justify-center space-x-3 shadow-2xl shadow-rgf-orange/30 scale-105 group relative overflow-hidden">
                   <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                   <span className="font-bold uppercase tracking-[0.2em] text-lg">Confirm & Order</span>
                   <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </button>
                
                <Link to="/products" className="block text-center text-[10px] font-bold text-rgf-green hover:text-rgf-orange transition-colors uppercase tracking-[0.4em] mt-10">
                  ← Add More Spices
                </Link>

                <div className="mt-12 pt-8 border-t border-rgf-sandy grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <ShieldCheck size={28} className="text-rgf-green" />
                    <span className="text-[8px] font-bold uppercase tracking-widest text-brand-dark/40 leading-tight">Secure <br/>Payments</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    <Truck size={28} className="text-rgf-orange" />
                    <span className="text-[8px] font-bold uppercase tracking-widest text-brand-dark/40 leading-tight">Fast <br/>Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartPage
