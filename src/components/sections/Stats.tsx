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
      description: "The crisis we're fighting"
    },
    { 
      value: 12500, 
      label: "Lives Changed", 
      icon: Users, 
      color: "from-green-400 to-green-600",
      description: "South Africans empowered"
    },
    { 
      value: 89, 
      suffix: "%", 
      label: "Interview Success Rate", 
      icon: TrendingUp, 
      color: "from-blue-400 to-blue-600",
      description: "After using JobSpark"
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
    <section id="impact" className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-slate-900 mb-3 sm:mb-4">
            Our Impact on South Africa
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
            We're not just building a platform – we're tackling one of South Africa's 
            biggest challenges with technology that works for everyone.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="relative group"
            >
              {/* Background glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-green-100 to-orange-100 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm"></div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative text-center bg-white/70 backdrop-blur-md border border-slate-200/80 p-6 lg:p-8 rounded-xl sm:rounded-2xl h-full flex flex-col items-center justify-center shadow-lg"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className={`p-3 lg:p-4 bg-gradient-to-r ${stat.color} rounded-full mb-4`}
                >
                  <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </motion.div>

                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tighter text-slate-900 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} precision={stat.value < 10 ? 1 : 0} />
                </div>
                
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

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
              Be Part of the Solution
            </h3>
            <p className="text-slate-600 mb-6">
              Every person who practices with JobSpark is one step closer to employment. 
              Help us reach more South Africans who need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://app.jobspark.co.za/auth"
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Start Practicing Free
              </a>
              <a 
                href="/donate"
                className="px-6 py-3 border border-orange-500 text-orange-600 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
              >
                Support Others
              </a>
              <a 
                href="/about"
                className="px-6 py-3 border border-blue-500 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Meet the Team
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};