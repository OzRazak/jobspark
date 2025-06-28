"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BarChart3, Users, Info, ArrowRight, Menu, X, Heart, BookOpen, Building } from "lucide-react";
import ShimmerButton from "../ui/ShimmerButton";
import Image from "next/image";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features", icon: BarChart3 },
    { name: "How It Works", href: "#how-it-works", icon: Users },
    { name: "Impact", href: "#impact", icon: Info },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "About", href: "/about", icon: Building },
    { name: "Support Others", href: "/donate", icon: Heart },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "circOut",
      },
    },
  };

  const contentVariants = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "circOut", staggerChildren: 0.1 },
    },
  };

  return (
    <motion.nav
      initial="initial"
      animate="animate"
      variants={headerVariants as any}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <motion.div
        variants={contentVariants as any}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 sm:h-20"
      >
        {/* Left Side: Logo */}
        <a href="/" className="flex items-center space-x-3">
          <Image 
            src="/jobspark-logo.svg" 
            alt="JobSpark Logo" 
            width={40} 
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-tight">
              <span className="text-red-600">Job</span><span className="text-green-600">Spark</span>
            </span>
            <span className="text-xs text-orange-500 font-medium hidden sm:block">Ignite your interview</span>
          </div>
        </a>

        {/* Center: Navigation - Hidden on mobile, shown on lg+ */}
        <div
          className="hidden lg:flex items-center space-x-1 bg-white/60 border border-slate-200/80 rounded-full px-2 shadow-sm"
          onMouseLeave={() => setHoveredLink("")}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative font-medium text-slate-600 hover:text-slate-900 transition-colors px-3 py-2 rounded-full group text-sm"
              onMouseEnter={() => setHoveredLink(link.name)}
            >
              <span className="relative z-10 flex items-center">
                <link.icon className={`w-4 h-4 mr-2 transition-colors ${
                  link.name === "Support Others" ? "text-red-400 group-hover:text-red-600" : "text-slate-400 group-hover:text-green-600"
                }`} />
                {link.name}
              </span>
              {hoveredLink === link.name && (
                <motion.div
                  className="absolute inset-0 bg-slate-100 rounded-full"
                  layoutId="hover-bg"
                  transition={{
                    duration: 0.25,
                    type: "spring",
                    stiffness: 120,
                    damping: 14,
                  }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right Side: Actions & Mobile Menu */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <a href="https://app.jobspark.co.za/auth" className="hidden sm:block">
            <motion.button
              whileHover={{ scale: 1.05, color: "#000" }}
              whileTap={{ scale: 0.95 }}
              className="font-semibold px-3 lg:px-4 py-2 text-slate-600 transition-colors text-sm lg:text-base"
            >
              Login
            </motion.button>
          </a>
          <a href="https://app.jobspark.co.za/auth" className="hidden sm:block">
            <ShimmerButton className="!px-4 lg:!px-5 !py-2 lg:!py-2.5 !text-sm lg:!text-base">
              <span className="flex items-center">
                Get Started <ArrowRight className="ml-2 w-3 h-3 lg:w-4 lg:h-4" />
              </span>
            </ShimmerButton>
          </a>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/60"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center space-x-3 px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
              >
                <link.icon className={`w-5 h-5 ${
                  link.name === "Support Others" ? "text-red-400" : "text-slate-400"
                }`} />
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <a href="https://app.jobspark.co.za/auth" className="block">
                <button className="w-full text-left px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors font-medium">
                  Login
                </button>
              </a>
              <a href="https://app.jobspark.co.za/auth" className="block">
                <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};