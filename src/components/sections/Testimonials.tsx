"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { Quote, ArrowLeft, ArrowRight, Star, Info } from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
    { 
      name: "Thabo Mthembu", 
      role: "Software Engineer", 
      content: "JobSpark's AI CV builder is a game-changer. It helped me highlight my skills in a way I never could have on my own. I landed my dream job in just three weeks.", 
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      location: "Johannesburg"
    },
    { 
      name: "Nomsa Dlamini", 
      role: "Marketing Manager", 
      content: "The interview prep tool was incredible. I went into my interviews feeling so much more confident and prepared. It made all the difference.", 
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      location: "Cape Town"
    },
    { 
      name: "Sipho Ndaba", 
      role: "Data Analyst", 
      content: "A fantastic platform for the South African market. The direct connections to employers are invaluable. I received three offers!", 
      avatar: "https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      location: "Durban"
    },
    { 
      name: "Lerato Mokwena", 
      role: "HR Specialist", 
      content: "As someone who reviews CVs daily, I can say JobSpark creates truly professional documents. The Ubuntu integration in interview prep is brilliant.", 
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      location: "Johannesburg"
    },
    { 
      name: "Mandla Khumalo", 
      role: "Junior Developer", 
      content: "Coming from a disadvantaged background, JobSpark gave me the confidence I needed. The voice coach understood my accent perfectly.", 
      avatar: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      location: "Cape Town"
    },
    { 
      name: "Zanele Khumalo", 
      role: "Financial Analyst", 
      content: "The gamification kept me motivated throughout my job search. Earning badges for practice sessions made the whole process enjoyable.", 
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      location: "Pretoria"
    },
    { 
      name: "Bongani Mthethwa", 
      role: "Project Manager", 
      content: "The cultural awareness of the AI coach is impressive. It helped me prepare for questions about Ubuntu and teamwork in a way that felt authentic.", 
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      location: "Durban"
    },
    { 
      name: "Naledi Motsepe", 
      role: "Business Analyst", 
      content: "JobSpark helped me transition from retail to corporate. The interview practice gave me the confidence to aim higher and succeed.", 
      avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      location: "Johannesburg"
    }
];

// Helper to handle wrapping indices
const wrap = (index: number, length: number) => {
  return ((index % length) + length) % length;
};

export const Testimonials = () => {
    const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
    const [isHovered, setIsHovered] = useState(false);

    const changeTestimonial = (newDirection: number) => {
        setActiveIndex([wrap(activeIndex + newDirection, testimonials.length), newDirection]);
    };
    
    useEffect(() => {
        if(isHovered) return;
        const interval = setInterval(() => changeTestimonial(1), 6000);
        return () => clearInterval(interval);
    }, [isHovered, activeIndex]);

    const activeTestimonial = testimonials[activeIndex];

    const slideVariants: Variants = {
        enter: (direction: number) => ({ x: direction > 0 ? 100 : -100, opacity: 0, scale: 0.95 }),
        center: { x: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 25 } },
        exit: (direction: number) => ({ x: direction < 0 ? 100 : -100, opacity: 0, scale: 0.95, transition: { type: "spring", stiffness: 200, damping: 25 } }),
    };

    return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] opacity-30 sm:opacity-50" />
          <motion.div 
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 30% 20%, #dcfce7 0%, transparent 50%)",
                "radial-gradient(circle at 70% 80%, #fed7aa 0%, transparent 50%)",
                "radial-gradient(circle at 30% 20%, #dcfce7 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-slate-900 mb-3 sm:mb-4 bg-gradient-to-r from-green-600 via-blue-600 to-green-600 bg-clip-text text-transparent"
          >
            Loved by Professionals in SA
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Illustrative of the testimonials we would love to receive. These are not necessarily real yet - if you see benefit in the platform, please share your experience to help spread the word!
          </motion.p>
        </motion.div>
        
        <div 
            className="relative min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={activeIndex} 
                    custom={direction} 
                    variants={slideVariants}
                    initial="enter" 
                    animate="center" 
                    exit="exit"
                    className="absolute w-full max-w-2xl"
                >
                  <motion.div 
                    className="p-6 sm:p-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/80 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Animated background gradient */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-blue-50/50 to-orange-50/50 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10">
                      <Quote className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 text-slate-100" />
                      
                      {/* Rating */}
                      <motion.div 
                        className="flex items-center space-x-1 mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {[...Array(activeTestimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                          >
                            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                          </motion.div>
                        ))}
                      </motion.div>
                      
                      <motion.p 
                        className="relative text-base sm:text-lg text-slate-700 mb-6 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        "{activeTestimonial.content}"
                      </motion.p>
                      
                      <motion.div 
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="relative"
                          >
                            <Image 
                              src={activeTestimonial.avatar} 
                              alt={activeTestimonial.name} 
                              width={56} 
                              height={56} 
                              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-sky-200 object-cover shadow-lg" 
                            />
                          </motion.div>
                          <div className="flex-1">
                              <div className="font-bold text-slate-800 text-sm sm:text-base">{activeTestimonial.name}</div>
                              <div className="text-xs sm:text-sm text-slate-600">{activeTestimonial.role}</div>
                              <div className="text-xs text-slate-500 flex items-center">
                                <span className="mr-1">📍</span>
                                {activeTestimonial.location}
                              </div>
                          </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
            </AnimatePresence>
            
            {/* Enhanced Navigation Buttons */}
            <motion.button 
              onClick={() => changeTestimonial(-1)} 
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-2 sm:left-4 lg:-left-12 p-2 sm:p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colours shadow-lg z-20 group border border-slate-200"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-600 group-hover:text-slate-800"/>
            </motion.button>
            <motion.button 
              onClick={() => changeTestimonial(1)} 
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-2 sm:right-4 lg:-right-12 p-2 sm:p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colours shadow-lg z-20 group border border-slate-200"
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-600 group-hover:text-slate-800"/>
            </motion.button>
        </div>
        
        {/* Enhanced Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex([index, index > activeIndex ? 1 : -1])}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-sky-500 w-6 sm:w-8 shadow-lg' 
                  : 'bg-slate-300 hover:bg-slate-400 w-2 sm:w-3'
              }`}
            />
          ))}
        </div>
        
        {/* Disclaimer notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <div className="flex items-start space-x-2 text-sm text-slate-500 max-w-md text-center">
            <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <p>These testimonials are illustrative examples of the feedback we hope to receive. If you find JobSpark helpful, please share your experience to help others discover our platform.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};