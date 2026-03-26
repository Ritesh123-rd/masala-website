import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Instagram, Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Send, ArrowRight, ShieldCheck, Globe
} from 'lucide-react'
import logoImg from '../assets/images/icons/logo.jpeg'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About US', path: '/about' },
        { name: 'Our Brands', path: '/' },
        { name: 'Contact', path: '/contact' },
      ]
    },
    {
      title: 'Products',
      links: [
        { name: 'Spices', path: '/products' },
        { name: 'Atta', path: '/products' },
        { name: 'Oil', path: '/products' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQ', path: '/contact' },
        { name: 'Privacy Policy', path: '/contact' },
        { name: 'Terms & Conditions', path: '/contact' },
      ]
    }
  ]

  return (
    <footer className="bg-rgf-green text-white pt-20 pb-10 selection:bg-rgf-saffron">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 mb-16">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-black text-white mb-8 border-b-2 border-rgf-saffron inline-block pb-2 uppercase tracking-tighter">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-white/60 hover:text-white text-sm transition-all font-bold group flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-rgf-saffron rounded-full opacity-0 group-hover:opacity-100 transition-all"></span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div>
            <h4 className="text-lg font-black text-white mb-8 border-b-2 border-rgf-saffron inline-block pb-2 uppercase tracking-tighter">Contact info</h4>
            <ul className="space-y-6">
               <li className="flex items-center space-x-4 group text-white/60 hover:text-white transition-all">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-rgf-saffron transition-all">
                     <MapPin size={18} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest">Business Address</span>
               </li>
               <li className="flex items-center space-x-4 group text-white/60 hover:text-white transition-all">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-rgf-saffron transition-all">
                     <Phone size={18} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest">+91 991XX XXXXX</span>
               </li>
               <li className="flex items-center space-x-4 group text-white/60 hover:text-white transition-all">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-rgf-saffron transition-all">
                     <Mail size={18} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest">Email Address</span>
               </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-10 border-t border-white/10">
           <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center space-x-4">
                 <div className="w-10 h-10 bg-rgf-saffron rounded-full flex items-center justify-center shadow-lg"><Globe size={20} /></div>
                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"><Facebook size={20} /></div>
                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"><Instagram size={20} /></div>
                 <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"><Twitter size={20} /></div>
              </div>
              
              <div className="text-center md:text-right">
                 <p className="text-white/40 text-[10px] md:text-sm font-bold uppercase tracking-[0.3em]">
                    © {currentYear} Rudransh Global Foods | All Rights Reserved
                 </p>
              </div>
           </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
