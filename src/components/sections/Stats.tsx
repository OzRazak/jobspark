"use client";

import { motion, Variants } from "framer-motion";
import { TrendingDown, Users, TrendingUp, Heart } from "lucide-react";
import AnimatedCounter from "../ui/AnimatedCounter";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

export const Stats = () => {
  const stats = [
    { 
      value: 32.9, 
      suffix: "%", 
      label: "Youth Unemployment in SA", 
      icon: TrendingDown, 
      color: "from-sa-gold-400 to-sa-gold-600",
      description: "The crisis we're targeting"
    },
    { 
      value: 3000000, 
      label: "Targeting Lives to Change", 
      icon: Users, 
      color: "from-green-400 to-green-600",
      description: "Targeting 3M South Africans"
    },
    { 
      value: 89, 
      suffix: "%", 
      label: "Targeting Interview Success Rate", 
      icon: TrendingUp, 
      color: "from-blue-400 to-blue-600",
      description: "Targeting with JobSpark"
    },
    { 
      value: 100, 
      suffix: "%", 
      label: "Free & Open Source", 
      icon: Heart, 
      color: "from-orange-400 to-orange-600",
      description: "Always accessible"
    },
  ];

  return (
    <section id="impact" className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] sm:bg-[size:2.5rem_2.5rem] opacity-30 sm:opacity-50" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_#fef3c7_0%,_transparent_40%)]" />
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#dcfce7_0%,_transparent_45%)]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-slate-900 mb-3 sm:mb-4 bg-gradient-to-r from-green-600 via-blue-600 to-green-600 bg-clip-text text-transparent"
          >
            Our Target Impact on South Africa
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto"
          >
            We're not just building a platform – we're targeting one of South Africa's 
            biggest challenges with technology that works for everyone.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="relative group"
            >
              {/* Enhanced Background glow with animation */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm"
                animate={{ 
                  scale: [1, 1.02, 1],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
              
              <motion.div 
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative text-center bg-white/80 backdrop-blur-md border border-slate-200/80 p-6 lg:p-8 rounded-xl sm:rounded-2xl h-full flex flex-col items-center justify-center shadow-lg"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  className={`p-3 lg:p-4 bg-gradient-to-r ${stat.color} rounded-full mb-4 shadow-lg`}
                >
                  <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </motion.div>

                <motion.div 
                  className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tighter text-slate-900 mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} precision={stat.value < 10 ? 1 : 0} />
                </motion.div>
                
                <div className="text-slate-700 font-semibold text-sm lg:text-base text-center leading-tight mb-2">
                  {stat.label}
                </div>
                
                <div className="text-slate-500 text-xs lg:text-sm text-center leading-tight">
                  {stat.description}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xl max-w-2xl mx-auto relative overflow-hidden"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-blue-50 to-orange-50 opacity-50" />
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Be Part of the Solution
              </h3>
              <p className="text-slate-600 mb-6">
                Every person who practises with JobSpark is one step closer to employment. 
                Help us reach our target of 3 million South Africans who need it most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                  href="https://app.jobspark.co.za/auth"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colours shadow-lg"
                >
                  Start Practising Free
                </motion.a>
                <motion.a 
                  href="/donate"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-orange-500 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colours"
                >
                  Support Others
                </motion.a>
                <motion.a 
                  href="/about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border border-blue-500 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colours"
                >
                  Meet the Team
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};