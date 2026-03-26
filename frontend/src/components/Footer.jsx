import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ShieldCheck, Globe
} from 'lucide-react'
import logoImg from '../assets/images/icons/logo.jpeg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
    { icon: <Facebook size={18} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
  ]

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'Home Store', path: '/' },
        { name: 'Our Heritage', path: '/about' },
        { name: 'Full Catalog', path: '/products' },
        { name: 'Bulk Inquiry', path: '/contact' },
      ]
    },
    {
      title: 'Top Items',
      links: [
        { name: 'Pure Spices', path: '/products' },
        { name: 'Chakki Atta', path: '/products' },
        { name: 'Masala Blends', path: '/products' },
        { name: 'Super Combos', path: '/products' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Track Order', path: '/contact' },
        { name: 'Shipping Info', path: '/contact' },
        { name: 'B2B Support', path: '/contact' },
        { name: 'Terms of Use', path: '/contact' },
      ]
    }
  ]

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-16 mb-20">
          
          {/* Branded Identity - Fixed visible logo */}
          <div className="lg:col-span-2 space-y-10">
            <div className="flex items-center space-x-6">
               <div className="h-20 w-auto bg-white rounded-xl p-2 shadow-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src={logoImg} 
                    alt="Rudransh Global Foods" 
                    className="h-full w-auto object-contain"
                  />
               </div>
               <div className="flex flex-col">
                  <h2 className="text-3xl font-black tracking-tighter uppercase leading-none text-white">RUDRANSH</h2>
                  <p className="text-[10px] font-bold text-rgf-saffron uppercase tracking-[0.4em] mt-1">Global Foods</p>
               </div>
            </div>
            
            <p className="text-white/30 text-base leading-relaxed max-w-sm font-medium">
              ISO Certified manufacturer of authentic 'Kisan Masale' and premium 'Sharbati Atta'. Exporting quality to the world.
            </p>
            
            <div className="flex space-x-3">
              {socialLinks.map((link, i) => (
                <a key={i} href={link.href} aria-label={link.label}
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white/50 hover:bg-rgf-green hover:text-white hover:border-rgf-green transition-all shadow-xl active:scale-90">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-black text-rgf-saffron mb-10 uppercase tracking-[0.3em] opacity-80 leading-none">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-white/30 hover:text-white text-xs transition-colors font-bold uppercase tracking-[0.2em] block leading-none">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Global Hub Strip */}
        <div className="grid md:grid-cols-3 gap-10 py-12 border-y border-white/5 mb-20 bg-white/[0.02] rounded-[2rem] px-10">
            <div className="flex items-center space-x-6 group">
               <div className="w-14 h-14 bg-rgf-green/10 rounded-2xl flex items-center justify-center text-rgf-green group-hover:bg-rgf-green group-hover:text-white transition-all">
                  <ShieldCheck size={28} />
               </div>
               <div className="flex flex-col">
                  <span className="text-xs font-black uppercase tracking-widest text-white mb-1">Authentic Pure</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Lab Certified</span>
               </div>
            </div>
            <div className="flex items-center space-x-6 group">
               <div className="w-14 h-14 bg-rgf-saffron/10 rounded-2xl flex items-center justify-center text-rgf-saffron group-hover:bg-rgf-saffron group-hover:text-white transition-all">
                  <Globe size={28} />
               </div>
               <div className="flex flex-col">
                  <span className="text-xs font-black uppercase tracking-widest text-white mb-1">Global Reach</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Export Standard</span>
               </div>
            </div>
            <div className="flex items-center space-x-6 group">
               <div className="w-14 h-14 bg-rgf-green/10 rounded-2xl flex items-center justify-center text-rgf-green group-hover:bg-rgf-green group-hover:text-white transition-all">
                  <Mail size={28} />
               </div>
               <div className="flex flex-col">
                  <span className="text-xs font-black uppercase tracking-widest text-white mb-1">B2B Ready</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Industrial Supply</span>
               </div>
            </div>
        </div>

        {/* Legal Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-white/20 text-[10px] uppercase font-black tracking-[0.3em]">
          <div className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
            <p>© {currentYear} Rudransh Global Foods Private Limited.</p>
            <div className="flex gap-8">
               <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
               <span className="hover:text-white transition-colors cursor-pointer">Terms Condition</span>
            </div>
          </div>
          
          <div className="flex items-center gap-10">
            <div className="flex items-center space-x-3 group cursor-pointer">
               <MapPin size={14} className="text-rgf-green group-hover:scale-125 transition-transform" />
               <span className="group-hover:text-white transition-colors">UP, India</span>
            </div>
            <div className="flex items-center space-x-3 group cursor-pointer">
               <Mail size={14} className="text-rgf-saffron group-hover:scale-125 transition-transform" />
               <span className="group-hover:text-white transition-colors">support@rgf.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
