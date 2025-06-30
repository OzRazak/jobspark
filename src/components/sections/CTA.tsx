"use client";

import { motion } from "framer-motion";
import { Heart, ArrowRight, CheckCircle } from "lucide-react";
import React from "react";

// --- Enhanced "Shine" Button ---
const ShineButton = ({ children, href }: { children: React.ReactNode; href?: string }) => {
    const ButtonContent = (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-slate-800 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
            {/* The base text */}
            <span className="relative z-10 flex items-center justify-center">{children}</span>

            {/* The animated shine element */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ x: "-150%", skewX: "-25deg" }}
                whileHover={{
                    x: "150%",
                    transition: { duration: 0.6, ease: "easeInOut" }
                }}
                style={{
                    background: "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5), transparent)",
                }}
            />
        </motion.button>
    );

    return href ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {ButtonContent}
      </a>
    ) : ButtonContent;
};

export const CTA = () => {
  const benefits = [
    "100% Free to use",
    "No registration required", 
    "Start practising immediately"
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #dcfce7 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, #fed7aa 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, #fecaca 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #dcfce7 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            className="relative text-center rounded-2xl sm:rounded-3xl overflow-hidden p-1 bg-gradient-to-br from-green-300 via-orange-300 to-red-300"
        >
          {/* Enhanced Animated Gradient Background */}
          <motion.div 
            className="absolute inset-[-100%] -z-10 bg-[conic-gradient(from_90deg_at_50%_50%,#dcfce7_0%,#fed7aa_50%,#fecaca_100%)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="relative bg-slate-900/90 backdrop-blur-xl p-8 sm:p-12 lg:p-16 rounded-[22px] overflow-hidden">
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  animate={{
                    x: [0, 100, 0],
                    y: [0, -100, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`
                  }}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto relative z-10"
            >
              <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-white mb-4 sm:mb-6 [text-shadow:0_2px_4px_rgba(0,0,0,0.3)]"
              >
                Ready to Land Your Dream Job?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg text-green-100/90 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] leading-relaxed"
              >
                Join thousands of South Africans who are targeting to transform their careers with AI-powered 
                interview practice. Your success story starts here.
              </motion.p>
              
              {/* Benefits List */}
              <motion.div 
                className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-2 text-green-200/90"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                    <span className="text-sm sm:text-base font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <ShineButton href="https://app.jobspark.co.za/auth">
                  <span className="flex items-center">
                    Start Practising Free
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </ShineButton>
                
                <ShineButton href="/donate">
                  <span className="flex items-center">
                    Support Others
                    <Heart className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                </ShineButton>
              </motion.div>
              
              <motion.p 
                className="text-green-200/60 text-xs sm:text-sm mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Targeting to help 3 million South Africans accelerate their careers
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};