"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-4 md:col-span-1 mb-8 md:mb-0">
            <a href="#" className="flex items-center space-x-3 mb-4">
              <Image 
                src="/jobspark-logo.svg" 
                alt="JobSpark Logo" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">
                  <span className="text-red-600">Job</span><span className="text-green-600">Spark</span>
                </span>
                <span className="text-xs text-orange-500 font-medium">Ignite your interview</span>
              </div>
            </a>
            <p className="text-slate-500 text-sm max-w-xs">
              AI-powered career tools tackling South Africa's unemployment crisis, one interview at a time.
            </p>
            <p className="text-slate-400 text-xs mt-4">
              Built with ❤️ by <a href="https://auxo.digital/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">Auxo Digital</a>
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 col-span-4 md:col-span-3 gap-8">
            {[
              {
                title: "Product",
                links: [
                  { name: "Features", href: "#features" },
                  { name: "How It Works", href: "#how-it-works" },
                  { name: "Interview Practice", href: "https://app.jobspark.co.za" },
                ],
              },
              { 
                title: "Company", 
                links: [
                  { name: "About Auxo Digital", href: "/about" },
                  { name: "Blog", href: "/blog" },
                  { name: "Support Others", href: "/donate" },
                  { name: "Contact", href: "mailto:info@auxo.digital" },
                ] 
              },
              { 
                title: "Legal", 
                links: [
                  { name: "Privacy Policy", href: "/privacy" },
                  { name: "Terms of Service", href: "/terms" },
                  { name: "Open Source", href: "https://github.com/jobspark" },
                ] 
              },
            ].map((col) => (
              <div key={col.title}>
                <h3 className="font-semibold text-slate-900 mb-4">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-slate-500 hover:text-green-600 transition-colors"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 border-t border-slate-200 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} JobSpark. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Proudly built for South Africa</span>
            <span className="text-lg">🇿🇦</span>
          </p>
        </div>
      </div>
    </footer>
  );
};