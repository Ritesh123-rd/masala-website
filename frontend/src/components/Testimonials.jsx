import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      text: "Best quality masale laise bikul ghar jaisa.",
      image: "https://i.pravatar.cc/150?u=rahul",
      rating: 5,
    },
    {
      name: "Priya Gupta",
      text: "Atta bahut hi fresh aur soft roti bann rahi hai.",
      image: "https://i.pravatar.cc/150?u=priya",
      rating: 5,
    },
    {
      name: "Amit Patel",
      text: "Packaging aur delivery dono perfect hain!",
      image: "https://i.pravatar.cc/150?u=amit",
      rating: 5,
    }
  ]

  return (
    <section className="py-20 bg-rgf-saffron selection:bg-rgf-green selection:text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
             <div className="h-px w-16 bg-white"></div>
             <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight">What Our <span className="text-rgf-green italic">Users</span> Say</h2>
             <div className="h-px w-16 bg-white"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] p-8 shadow-2xl relative group"
            >
              <div className="flex flex-col items-center text-center">
                 <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-rgf-green mb-6 shadow-xl">
                    <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                 </div>
                 <p className="text-brand-dark/80 font-bold text-lg mb-6 leading-relaxed italic">
                    "{review.text}"
                 </p>
                 <div className="flex space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, j) => <Star key={j} size={16} className="text-rgf-green fill-rgf-green" />)}
                 </div>
                 <h4 className="text-xl font-black text-brand-dark uppercase tracking-tighter">
                    {review.name}
                 </h4>
              </div>
              
              {/* UI Image Quote Icon style */}
              <div className="absolute top-6 left-6 text-rgf-green/10">
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 14.686 16.703 12 20.017 12L20.017 11C16.151 11 13.017 14.134 13.017 18L13.017 21L14.017 21ZM4.017 21L4.017 18C4.017 14.686 6.703 12 10.017 12L10.017 11C6.151 11 3.017 14.134 3.017 18L3.017 21L4.017 21Z"/></svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
