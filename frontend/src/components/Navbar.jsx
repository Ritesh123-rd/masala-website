import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Menu, X, Search } from 'lucide-react'

import logoImg from '../assets/images/icons/logo.jpeg'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setIsMobileMenuOpen(false), [location])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Brands', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => {
    const currentPath = location.pathname;
    if (path === '/') return currentPath === '/'
    return currentPath === path;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white">
      {/* Saffron Top Bar */}
      <div className="bg-rgf-saffron text-white py-1.5 px-4 md:px-10 flex flex-wrap justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest border-b border-white/10">
          <div className="flex items-center space-x-6">
              <span>991 XXXXX XXXXX</span>
              <span className="hidden md:inline">info@rudranshfoods.com</span>
              <span className="hidden md:inline">Free Delivery Above ₹299</span>
          </div>
          <div className="flex items-center space-x-6">
              <span>EN</span>
              <span className="flex items-center space-x-2">
                 <ShoppingCart size={14} />
              </span>
          </div>
      </div>

      <div className="container mx-auto px-4 md:px-10">
        <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-16 md:h-20' : 'h-20 md:h-24'}`}>
          
          {/* Logo */}
          <Link to="/" className="group shrink-0 h-full flex items-center">
            <img 
              src={logoImg} 
              alt="Rudransh Global Foods" 
              className="h-16 md:h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Nav Items */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300
                  ${isActive(item.path) 
                    ? 'text-rgf-green bg-rgf-green/5 rounded-lg' 
                    : 'text-brand-dark hover:text-rgf-green'
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/login" className="ml-4 px-6 py-2 bg-rgf-green text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:bg-rgf-orange transition-all shadow-lg flex items-center space-x-2 overflow-hidden relative group/btn">
               <Search size={14} className="group-hover/btn:translate-x-1 transition-transform" />
               <span className="relative z-10">Login / Register</span>
            </Link>
          </div>

          {/* Burger Menu for Mobile */}
          <div className="lg:hidden">
             <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-3 bg-rgf-green text-white rounded-xl shadow-xl active:scale-95 transition-transform"
             >
               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-zinc-100 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-8 space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path}
                  className={`flex items-center px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-xs ${
                    isActive(item.path) ? 'bg-rgf-green text-white shadow-lg' : 'text-brand-dark hover:bg-zinc-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
