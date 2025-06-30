"use client";

import { motion, useInView } from "framer-motion";
import { ExternalLink, ArrowRight, Code, Zap, Users, Target, Heart, Building } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import TypewriterText from "../ui/TypewriterText";

export const AuxoDigitalSection = () => {
  const [messageComplete, setMessageComplete] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const founderMessage1 = `"When we first thought of JobSpark, two issues for us came to mind. One was helping more people find purpose through meaningful work and in that helping in a very small way with the job crisis issue we have in South Africa."`;
  const founderMessage2 = `"Secondly, we are a startup that often has to go through thousands of CVs and hundreds of interviews in a year. We come across good, skilled people, that often due to nervousness, perhaps lack of practice, do not put their best foot forward in an interview, which is usually the make or break as to whether we progress to a case study or even hiring."`;

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20" />
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, #dcfce7 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, #dbeafe 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, #dcfce7 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                i % 3 === 0 ? 'bg-green-400/30' : 
                i % 3 === 1 ? 'bg-blue-400/30' : 'bg-orange-400/30'
              }`}
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                delay: i * 0.8
              }}
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + i * 8}%`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 font-semibold px-4 py-2 rounded-full text-sm mb-6 border border-blue-200 shadow-sm"
          >
            <Building className="w-4 h-4 mr-2" />
            An Auxo Digital Supporting Platform
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tighter text-slate-900 mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent"
          >
            Powered by Innovation & Purpose
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-2xl border border-blue-200/50 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">A Message from Oz Razak, Founder</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                <TypewriterText 
                  text={founderMessage1} 
                  speed={30} 
                  delay={500}
                  onComplete={() => setTimeout(() => setMessageComplete(true), 500)}
                />
              </p>
              {messageComplete && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-slate-700 leading-relaxed"
                >
                  <TypewriterText 
                    text={founderMessage2} 
                    speed={30}
                  />
                </motion.p>
              )}
            </div>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="text-lg font-semibold text-slate-900">What Auxo Digital Does</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div 
                  className="flex items-start space-x-3"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Code className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-800">Custom AI Platforms</h5>
                    <p className="text-sm text-slate-600">Rapid 3-6 month development cycles</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start space-x-3"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Zap className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-800">Digital Transformation</h5>
                    <p className="text-sm text-slate-600">Enterprise solutions that scale</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start space-x-3"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-800">Human-Centred Design</h5>
                    <p className="text-sm text-slate-600">Technology that serves people</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start space-x-3"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Heart className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-800">Social Impact</h5>
                    <p className="text-sm text-slate-600">Solutions that matter</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a 
                href="https://auxo.digital/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colours shadow-lg"
              >
                Visit Auxo Digital
                <ExternalLink className="ml-2 w-4 h-4" />
              </motion.a>
              <motion.a 
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colours"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-200/50 shadow-xl">
              {/* Auxo Digital Logo */}
              <motion.div 
                className="text-center mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/Auxo Digital Primary logo with tagline@4x-100.jpg"
                  alt="Auxo Digital Logo"
                  width={200}
                  height={80}
                  className="mx-auto h-16 w-auto object-contain"
                />
              </motion.div>

              {/* Oz's Photo */}
              <motion.div 
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src="/OZ10 Large Medium copy copy.jpeg"
                      alt="Oz Razak, Founder of Auxo Digital"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <motion.div 
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </motion.div>

              <div className="text-center">
                <h4 className="font-bold text-slate-900 mb-2">Oz Razak</h4>
                <p className="text-sm text-slate-600 mb-4">Founder, Auxo Digital</p>
                <div className="flex justify-center space-x-4">
                  <motion.a
                    href="https://www.linkedin.com/in/oz-razak/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colours"
                  >
                    <span className="text-blue-600 font-semibold text-sm">LinkedIn</span>
                  </motion.a>
                  <motion.a
                    href="https://auxo.digital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 bg-green-100 rounded-lg hover:bg-green-200 transition-colours"
                  >
                    <span className="text-green-600 font-semibold text-sm">Website</span>
                  </motion.a>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div 
                className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-4 left-4 w-2 h-2 bg-green-400 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-200/50 shadow-lg">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Supporting Meaningful Innovation
            </h3>
            <p className="text-slate-600 mb-4">
              JobSpark is just one example of how Auxo Digital uses technology to create positive impact. 
              We're always looking for partners who share our vision of human-centred innovation.
            </p>
            <motion.a 
              href="/blog/south-africa-needs-open-source-software"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              Read about our open source mission
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};