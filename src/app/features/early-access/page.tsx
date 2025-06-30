"use client";

import React from 'react';
import { AlertTriangle, Info, Shield, Bug, Database, Users, CheckCircle, ExternalLink, ArrowRight, Zap, Heart } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function EarlyAccessPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-20 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full">
              <AlertTriangle className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Early Access Program
          </h1>
          <p className="text-xl lg:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
            JobSpark is currently in early access. This means you're getting first access to our 
            innovative features, but you may encounter bugs and incomplete functionality.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Zap className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">Early Access Status</span>
            </div>
            <div className="text-orange-100 text-sm">
              Active • Expect bugs and issues • Use at your own risk
            </div>
          </div>
        </div>
      </section>

      {/* Important Disclaimers */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Important Disclaimers & Warnings
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Please read these important notices before using JobSpark during our early access period.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Critical Warnings */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-50 border-2 border-red-200 rounded-2xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-red-900">Critical Warnings</h3>
              </div>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Bugs and Issues:</strong> Expect frequent bugs, crashes, and unexpected behaviour</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Incorrect AI Responses:</strong> Interview answers and feedback may be inaccurate or inappropriate</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Data Loss Risk:</strong> Your data may be lost during updates or system failures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Service Interruptions:</strong> Expect downtime and service unavailability</span>
                </li>
              </ul>
            </motion.div>

            {/* Content Disclaimers */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Info className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-orange-900">Content Disclaimers</h3>
              </div>
              <ul className="space-y-3 text-orange-800">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Fictitious Information:</strong> Some content across the website and app is for demonstration purposes only</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Placeholder Data:</strong> User testimonials, statistics, and examples may be illustrative</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Incomplete Features:</strong> Many features are partially implemented or non-functional</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span><strong>Changing Interface:</strong> The user interface and experience will change frequently</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Usage Notice */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-blue-900">Data Usage During Early Access</h2>
                <p className="text-blue-700">Important information about how we handle your data</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-4">What We Collect</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Interview practice recordings and responses</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>CV and profile information you provide</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Usage patterns and platform interactions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Error logs and performance data</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-4">How We Use It</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Improve AI model accuracy and responses</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Fix bugs and enhance platform performance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Develop new features and capabilities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span>Understand user needs and preferences</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-100 rounded-lg">
              <p className="text-blue-900 font-medium">
                <Shield className="w-5 h-5 inline mr-2" />
                Your Privacy Matters: All data is anonymised before analysis and we never sell your personal information. 
                You can request data deletion at any time by contacting us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              What to Expect During Early Access
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Here's what you can expect as an early access user and how you can help us improve.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 rounded-2xl p-6"
            >
              <div className="p-3 bg-red-100 rounded-lg w-fit mb-4">
                <Bug className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Frequent Issues</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• AI responses may be incorrect or inappropriate</li>
                <li>• Features may not work as expected</li>
                <li>• Interface elements may be broken or missing</li>
                <li>• Performance may be slow or unstable</li>
                <li>• Data may be lost during updates</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 rounded-2xl p-6"
            >
              <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Rapid Changes</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Features will be added and removed frequently</li>
                <li>• Interface design will change regularly</li>
                <li>• New bugs may be introduced with updates</li>
                <li>• Your feedback directly influences development</li>
                <li>• Expect weekly or daily updates</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-50 rounded-2xl p-6"
            >
              <div className="p-3 bg-green-100 rounded-lg w-fit mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Community Driven</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Your feedback shapes the final product</li>
                <li>• Direct access to the development team</li>
                <li>• Priority support for early access users</li>
                <li>• Exclusive access to new features first</li>
                <li>• Help us build something amazing together</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-100 border-2 border-slate-300 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Legal Disclaimer & Terms of Use
            </h2>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>USE AT YOUR OWN RISK:</strong> By using JobSpark during the early access period, 
                you acknowledge and agree that:
              </p>
              
              <ul className="space-y-2 text-slate-700 mb-6">
                <li>• The platform is experimental and may contain serious bugs or security vulnerabilities</li>
                <li>• AI-generated content may be inaccurate, inappropriate, or harmful</li>
                <li>• Your data may be lost, corrupted, or accessed by unauthorised parties</li>
                <li>• The service may be unavailable or discontinued at any time without notice</li>
                <li>• You use the platform entirely at your own discretion and risk</li>
              </ul>
              
              <p className="text-slate-700 leading-relaxed mb-4">
                <strong>NO WARRANTIES:</strong> JobSpark is provided "as is" without any warranties, 
                express or implied. We make no guarantees about the accuracy, reliability, or 
                suitability of the platform for any purpose.
              </p>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                <strong>LIMITATION OF LIABILITY:</strong> Auxo Digital Pty Ltd shall not be liable 
                for any damages arising from your use of JobSpark during early access, including 
                but not limited to data loss, career setbacks, or any other direct or indirect damages.
              </p>
              
              <div className="bg-slate-200 p-4 rounded-lg">
                <p className="text-slate-800 font-medium text-center">
                  By continuing to use JobSpark, you acknowledge that you have read, understood, 
                  and agree to these terms and disclaimers.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support & Feedback */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Help Us Improve JobSpark
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Your feedback is invaluable during this early access period. Report bugs, 
              suggest features, and help us build the best career platform for South Africa.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-2">Report Issues</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Found a bug or experiencing problems? Let us know immediately.
                </p>
                <a 
                  href="mailto:support@jobspark.co.za?subject=Early Access Bug Report"
                  className="text-red-600 hover:text-red-700 font-medium text-sm"
                >
                  Report Bug →
                </a>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-2">Share Feedback</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Have ideas for improvement? We want to hear from you.
                </p>
                <a 
                  href="mailto:feedback@jobspark.co.za?subject=Early Access Feedback"
                  className="text-green-600 hover:text-green-700 font-medium text-sm"
                >
                  Send Feedback →
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2">Ready to Help Us Build Something Amazing?</h3>
              <p className="mb-4">
                Despite the risks and issues, you're helping us create a platform that could 
                transform careers across South Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://app.jobspark.co.za/auth"
                  className="px-6 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colours"
                >
                  Continue to JobSpark
                </a>
                <a 
                  href="/terms"
                  className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colours"
                >
                  Read Full Terms
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}