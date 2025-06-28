"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, FileText, Users, Mic, CheckCircle, Star, TrendingUp, Heart } from "lucide-react";
import React, { useState, useEffect } from "react";

// --- Enhanced Visual Components ---

const InterviewVisual = () => (
  <div className="w-full h-full p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center bg-white shadow-lg rounded-xl sm:rounded-2xl">
    <motion.div 
      initial={{ scale: 0 }} 
      animate={{ scale: 1 }} 
      className="mb-4 p-3 sm:p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-full"
    >
      <Mic className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
      className="text-center space-y-3"
    >
      <p className="text-xs sm:text-sm font-medium text-green-700 bg-green-100 px-3 py-2 rounded-lg">
        "Tell me about Ubuntu and teamwork in your previous role."
      </p>
      <div className="flex items-center justify-center space-x-2">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-xs text-green-600 font-medium">South African AI listening...</span>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-4 bg-green-50 px-3 py-2 rounded-lg"
    >
      <div className="flex items-center space-x-2">
        <Star className="w-4 h-4 text-yellow-500 fill-current" />
        <span className="text-xs sm:text-sm text-green-700 font-medium">Cultural fit: 94%</span>
      </div>
    </motion.div>
  </div>
);

const CVVisual = () => (
  <div className="w-full h-full p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-start bg-white shadow-lg rounded-xl sm:rounded-2xl">
    <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
        className="flex items-center space-x-2 mb-4"
    >
      <FileText className="w-5 h-5 text-green-600" />
      <p className="font-bold text-slate-800 text-sm sm:text-lg">AI Crafting Your CV...</p>
    </motion.div>
    <motion.div
        className="w-full space-y-2 sm:space-y-3"
        initial="hidden"
        animate="visible"
        variants={{
            visible: { transition: { staggerChildren: 0.3 } }
        }}
    >
        {[...Array(4)].map((_, i) => (
            <motion.div 
                key={i}
                className="h-2 sm:h-3 rounded-full bg-gradient-to-r from-green-200 to-blue-200"
                variants={{
                    hidden: { opacity: 0, width: "0%" },
                    visible: { opacity: 1, width: i % 2 === 0 ? "100%" : "85%" }
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            />
        ))}
    </motion.div>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5 }}
      className="mt-4 flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-lg"
    >
      <CheckCircle className="w-4 h-4 text-green-600" />
      <span className="text-xs sm:text-sm text-green-700 font-medium">SA-optimized CV ready!</span>
    </motion.div>
  </div>
);

const CommunityVisual = () => (
  <div className="w-full h-full p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center bg-white shadow-lg rounded-xl sm:rounded-2xl">
    <motion.div 
      initial={{ scale: 0 }} 
      animate={{ scale: 1 }} 
      className="mb-4 p-3 sm:p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-full"
    >
      <Users className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
      className="text-center space-y-3"
    >
      <div className="text-2xl font-bold text-orange-600">100%</div>
      <p className="text-xs sm:text-sm text-slate-600">Free & Open Source</p>
      <div className="text-lg font-bold text-green-600">12,500+</div>
      <p className="text-xs sm:text-sm text-slate-600">South Africans helped</p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-4 bg-orange-50 px-3 py-2 rounded-lg"
    >
      <div className="flex items-center space-x-2">
        <Heart className="w-4 h-4 text-red-500 fill-current" />
        <span className="text-xs sm:text-sm text-orange-700 font-medium">Community powered</span>
      </div>
    </motion.div>
  </div>
);

const ImpactVisual = () => (
  <div className="w-full h-full p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center bg-white shadow-lg rounded-xl sm:rounded-2xl">
    <motion.div 
      initial={{ scale: 0 }} 
      animate={{ scale: 1 }} 
      className="mb-4 p-3 sm:p-4 bg-gradient-to-r from-blue-100 to-green-100 rounded-full"
    >
      <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
      className="text-center space-y-3"
    >
      <div className="text-2xl font-bold text-red-600">32.9%</div>
      <p className="text-xs sm:text-sm text-slate-600">Youth unemployment</p>
      <div className="text-2xl font-bold text-green-600">89%</div>
      <p className="text-xs sm:text-sm text-slate-600">Success rate with JobSpark</p>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-4 bg-blue-50 px-3 py-2 rounded-lg"
    >
      <div className="flex items-center space-x-2">
        <span className="text-lg">🇿🇦</span>
        <span className="text-xs sm:text-sm text-blue-700 font-medium">Made for SA</span>
      </div>
    </motion.div>
  </div>
);

// --- Main Feature List ---
const features = [
  { 
    icon: MessageSquare, 
    title: "South African AI Interview Coach", 
    description: "Practice with AI that understands South African culture, accents, and workplace dynamics.", 
    visual: <InterviewVisual/> 
  },
  { 
    icon: FileText, 
    title: "Locally-Optimized CV Builder", 
    description: "Create CVs that resonate with South African employers and ATS systems.", 
    visual: <CVVisual/> 
  },
  { 
    icon: Users, 
    title: "Free & Open Source", 
    description: "Built by the community, for the community. Always free for those who need it most.", 
    visual: <CommunityVisual/> 
  },
  { 
    icon: TrendingUp, 
    title: "Fighting Unemployment", 
    description: "Every success story helps tackle South Africa's 32.9% youth unemployment crisis.", 
    visual: <ImpactVisual/> 
  },
];

export const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] sm:bg-[size:2.5rem_2.5rem] opacity-30 sm:opacity-50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} 
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-slate-900 mb-3 sm:mb-4">
            Built for South African Success
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            Our AI understands the unique challenges and opportunities in the South African job market, 
            helping you succeed with culturally-aware coaching and locally-optimized tools.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mobile: Stack features vertically, Desktop: Side navigation */}
          <div className="lg:hidden space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/80 shadow-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden">
                  {feature.visual}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Interactive side navigation */}
          <div className="hidden lg:flex flex-col gap-4"
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}>
            {features.map((feature, index) => (
              <div key={feature.title} 
                onMouseEnter={() => setActiveIndex(index)}
                className="relative p-6 rounded-2xl cursor-pointer transition-all duration-300">
                {activeIndex === index && (
                  <motion.div 
                    layoutId="active-feature-background"
                    className="absolute inset-0 bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-lg"
                    style={{ borderRadius: 16 }} 
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }} 
                  />
                )}
                <div className="relative z-10 flex items-start gap-4">
                  <motion.div 
                    className="p-3 rounded-lg transition-all duration-300"
                    animate={{
                        backgroundColor: activeIndex === index ? "#dcfce7" : "#f1f5f9",
                        color: activeIndex === index ? "#16a34a" : "#64748b"
                    }}>
                    <feature.icon className="w-6 h-6" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Desktop: Visual display */}
          <div className="hidden lg:block relative w-full aspect-[4/3] backdrop-blur-sm rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0"
              >
                {features[activeIndex].visual}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};