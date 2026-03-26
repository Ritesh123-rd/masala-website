import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react'
import spiceProcessing from '../assets/images/marketing/spice-processing.png'
import logoImg from '../assets/images/icons/logo.jpeg'

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your enquiry! We will get back to you shortly.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const contactInfo = [
    { icon: <MapPin size={24} />, title: 'Our Address', details: ['Kanpur, UP', '2080XX, India'], color: 'text-rgf-saffron', bg: 'bg-rgf-saffron/10' },
    { icon: <Phone size={24} />, title: 'Call Us', details: ['+91 XXXXX XXXXX', '+91 XXXXX XXXXX'], color: 'text-rgf-green', bg: 'bg-rgf-green/10' },
    { icon: <Mail size={24} />, title: 'Email Us', details: ['contact@rudranshfoods.com', 'sales@rudranshfoods.com'], color: 'text-rgf-blue', bg: 'bg-rgf-blue/10' },
    { icon: <Clock size={24} />, title: 'Working Hours', details: ['Mon-Sat: 9AM - 6PM', 'Sunday: Closed'], color: 'text-rgf-red', bg: 'bg-rgf-red/10' },
  ]

  return (
    <div className="pt-32 md:pt-40">
      {/* Banner */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-rgf-blue to-brand-dark flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={spiceProcessing} 
            alt="" 
            className="w-full h-full object-cover opacity-20" 
          />
          <div className="absolute inset-0 bg-gradient-to-br from-rgf-blue/80 to-brand-dark/90"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight"
          >
            Connect With <span className="text-rgf-saffron italic">RGF</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg md:text-2xl max-w-2xl mx-auto font-medium"
          >
            Have a question or custom enquiry? <br className="hidden md:block"/> We're here to help you get the pure taste of India.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 section-divider opacity-50"></div>
      </section>

      {/* Info Cards - Responsive */}
      <section className="-mt-12 md:-mt-16 relative z-20 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {contactInfo.map((info, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="kisan-card p-6 md:p-10 text-center shadow-2xl border-white"
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 ${info.bg} ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-xl`}>
                   {info.icon}
                </div>
                <h3 className="font-bold text-brand-dark md:text-xl mb-2 md:mb-4 uppercase tracking-tighter">{info.title}</h3>
                {info.details.map((d, j) => (
                  <p key={j} className="text-sm md:text-base text-brand-dark/40 font-medium leading-relaxed">{d}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Form Section */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <span className="text-rgf-green font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-4 block">Enquiry Form</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-12 text-brand-dark leading-tight">We'd Love to <span className="text-rgf-saffron italic">Hear From You</span></h2>
              
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="text-left">
                    <label className="block text-xs font-bold text-brand-dark md:text-sm uppercase tracking-widest mb-3">Your Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Suresh Kumar"
                      className="w-full bg-rgf-cream/30 border-2 border-rgf-sandy rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-rgf-green transition-all shadow-xl shadow-rgf-gold/5" />
                  </div>
                  <div className="text-left">
                    <label className="block text-xs font-bold text-brand-dark md:text-sm uppercase tracking-widest mb-3">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="suresh@example.com"
                      className="w-full bg-rgf-cream/30 border-2 border-rgf-sandy rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-rgf-green transition-all shadow-xl shadow-rgf-gold/5" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="text-left">
                    <label className="block text-xs font-bold text-brand-dark md:text-sm uppercase tracking-widest mb-3">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-rgf-cream/30 border-2 border-rgf-sandy rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-rgf-green transition-all shadow-xl shadow-rgf-gold/5" />
                  </div>
                  <div className="text-left">
                    <label className="block text-xs font-bold text-brand-dark md:text-sm uppercase tracking-widest mb-3">Subject *</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Wholesale Enquiry"
                      className="w-full bg-rgf-cream/30 border-2 border-rgf-sandy rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-rgf-green transition-all shadow-xl shadow-rgf-gold/5" />
                  </div>
                </div>
                <div className="text-left">
                  <label className="block text-xs font-bold text-brand-dark md:text-sm uppercase tracking-widest mb-3">Your Message *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell us how we can help you..."
                    className="w-full bg-rgf-cream/30 border-2 border-rgf-sandy rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-rgf-green transition-all resize-none shadow-xl shadow-rgf-gold/5" />
                </div>
                
                <button type="submit" className="w-full btn-secondary h-16 flex items-center justify-center space-x-3 shadow-2xl shadow-rgf-orange/30 group">
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <span className="font-bold uppercase tracking-widest">Send Your Message</span>
                </button>
              </form>
            </motion.div>

            {/* Map & Office Card */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="space-y-8 md:space-y-12"
            >
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-rgf-sandy group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748!2d80.23!3d26.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur!5e0!3m2!1sen!2sin!4v1600000000!5m2!1sen!2sin"
                  width="100%" height="400" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Office Location" 
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              <div className="bg-rgf-green p-10 md:p-14 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <img src={logoImg} alt="RGF" className="h-24 md:h-32 w-auto bg-white rounded-2xl p-3" 
                    onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }} />
                  <div className="hidden">
                    <h3 className="text-xl font-bold">RGF</h3>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">Rudransh Global Foods</h3>
                    <p className="text-white/60 text-xs md:text-sm font-medium">Authentic Indian Flavors Since 2025</p>
                  </div>
                </div>
                <div className="section-divider opacity-20 mb-8"></div>
                <p className="text-white/70 text-base md:text-xl leading-relaxed mb-10 font-medium">
                  We are a premium food processing company delivering high-quality Indian spices for both domestic and global markets.
                </p>
                
                <div className="flex items-center space-x-3 text-white/50 text-sm md:text-base font-bold uppercase tracking-widest">
                  <Globe size={18} />
                  <span>www.rudranshfoods.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
