"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Users, Info, ArrowRight, Menu, X, Heart, BookOpen, Building, ChevronDown, Zap } from "lucide-react";
import ShimmerButton from "../ui/ShimmerButton";
import Image from "next/image";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { 
      name: "Home", 
      href: "/", 
      icon: Home 
    },
    {
      name: "Features",
      icon: Zap,
      subItems: [
        { name: "Platform Features", href: "/features" },
        { name: "How It Works", href: "/#how-it-works" },
        { name: "Early Access", href: "/features/early-access" },
        { name: "FAQ", href: "/features#faq" },
      ]
    },
    {
      name: "Resources",
      icon: BookOpen,
      subItems: [
        { name: "Blog", href: "/blog" },
        { name: "Interview Tips", href: "/interview-tips" },
      ]
    },
    {
      name: "Company",
      icon: Building,
      subItems: [
        { name: "About Auxo Digital", href: "/about" },
        { name: "Meet the Team", href: "/about#team" },
        { name: "Building with Bolt & Auxo", href: "/building-with-bolt" },
      ]
    },
    { 
      name: "Support Others", 
      href: "/donate", 
      icon: Heart,
      highlight: true
    },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      
      // If we're not on the home page, navigate there first
      if (window.location.pathname !== '/') {
        window.location.href = href;
        return;
      }
      
      // If we're on the home page, scroll to the section
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
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
              <span className="text-blue-600">Job</span><span className="text-green-600">Spark</span>
            </span>
            <span className="text-xs text-orange-500 font-medium hidden sm:block">Ignite your interview</span>
          </div>
        </a>

        {/* Center: Navigation - Hidden on mobile, shown on lg+ */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {item.subItems ? (
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-1 font-medium text-slate-600 hover:text-slate-900 transition-colours px-3 py-2 rounded-lg text-sm">
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-lg py-2"
                      >
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={(e) => handleNavClick(e, subItem.href)}
                            className="block px-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colours"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href!)}
                  className={`flex items-center space-x-2 font-medium transition-colours px-3 py-2 rounded-lg text-sm ${
                    item.highlight 
                      ? "text-sa-gold-600 hover:text-sa-gold-700 bg-sa-gold-50 hover:bg-sa-gold-100" 
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Right Side: Actions & Mobile Menu */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Bolt Logo */}
          <a 
            href="https://bolt.new/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:block"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 lg:w-10 lg:h-10"
            >
              <Image
                src="/black_circle_360x360.png"
                alt="Powered by Bolt.new"
                width={40}
                height={40}
                className="w-full h-full"
              />
            </motion.div>
          </a>

          <a href="https://app.jobspark.co.za/auth" className="hidden sm:block">
            <motion.button
              whileHover={{ scale: 1.05, color: "#000" }}
              whileTap={{ scale: 0.95 }}
              className="font-semibold px-3 lg:px-4 py-2 text-slate-600 transition-colours text-sm lg:text-base"
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
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 transition-colours"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/60 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 max-h-96 overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colours"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-8 mt-2 space-y-2 overflow-hidden"
                          >
                            {item.subItems.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                onClick={(e) => handleNavClick(e, subItem.href)}
                                className="block px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colours text-sm"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href!)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colours ${
                        item.highlight 
                          ? "text-sa-gold-600 hover:text-sa-gold-700 bg-sa-gold-50 hover:bg-sa-gold-100" 
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </a>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <a href="https://app.jobspark.co.za/auth" className="block">
                  <button className="w-full text-left px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colours font-medium">
                    Login
                  </button>
                </a>
                <a href="https://app.jobspark.co.za/auth" className="block">
                  <button className="w-full bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colours">
                    Get Started
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};