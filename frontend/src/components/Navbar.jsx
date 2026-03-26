import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, Menu, X } from 'lucide-react'

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
    { name: 'Brands', path: '/products' },
    { name: 'Bulk Orders', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => {
    const currentPath = location.pathname + location.search;
    if (path === '/') return location.pathname === '/'
    return currentPath === path || currentPath === decodeURIComponent(path) || location.pathname === path.split('?')[0];
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white shadow-xl shadow-brand-dark/5' 
        : 'bg-white/95'
    }`}>
      <div className="h-0.5 bg-gradient-to-r from-rgf-green via-rgf-saffron to-rgf-green opacity-40"></div>

      <div className="container mx-auto px-4 md:px-10">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Logo - Simple & Direct */}
          <Link to="/" className="group shrink-0">
            <img 
              src={logoImg} 
              alt="Rudransh Global Foods" 
              className="h-16 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </Link>

          {/* Nav Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`px-6 py-2.5 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 relative group/nav
                  ${isActive(item.path) 
                    ? 'text-rgf-green' 
                    : 'text-brand-dark/60 hover:text-rgf-green'
                  }
                `}
              >
                {item.name}
                <div className={`absolute bottom-0 left-6 right-6 h-0.5 rounded-full transition-all duration-500 
                  ${isActive(item.path) ? 'bg-rgf-green opacity-100' : 'bg-rgf-green opacity-0 group-hover/nav:opacity-30 group-hover/nav:translate-y-[-2px]'}
                `}></div>
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative group p-3 bg-zinc-50 rounded-2xl hover:bg-rgf-green transition-all shadow-sm">
              <ShoppingCart size={22} className="text-brand-dark/50 group-hover:text-white transition-colors" />
              <span className="absolute -top-1.5 -right-1.5 bg-rgf-red text-white text-[9px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-xl">0</span>
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="lg:hidden flex items-center space-x-3">
            <Link to="/cart" className="relative p-2.5 bg-zinc-50 rounded-xl">
              <ShoppingCart size={22} className="text-brand-dark/60" />
              <span className="absolute -top-1 -right-1 bg-rgf-red text-white text-[9px] font-bold w-4.5 h-4.5 flex items-center justify-center rounded-full border-2 border-white shadow-lg">0</span>
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 bg-brand-dark text-white rounded-xl shadow-xl active:scale-95 transition-transform"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            className="lg:hidden bg-white border-t border-zinc-50 origin-top shadow-4xl overflow-hidden"
          >
            <div className="container mx-auto px-6 py-10 space-y-3">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path}
                  className={`flex items-center justify-between px-6 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${
                    isActive(item.path) ? 'bg-rgf-green text-white shadow-xl' : 'text-brand-dark/40 bg-zinc-50 hover:bg-zinc-100'
                  }`}
                >
                  <span>{item.name}</span>
                  <div className={`w-2 h-2 rounded-full ${isActive(item.path) ? 'bg-white animate-pulse shadow-glow' : 'bg-brand-dark/5'}`}></div>
                </Link>
              ))}
              {/* Removed Quick Inquiry Button */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
