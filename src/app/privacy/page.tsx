'use client';

import React from 'react';
import { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Shield, Lock, Database, User, Clock, AlertTriangle, CheckCircle, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Privacy Policy - JobSpark',
  description: 'Privacy Policy for JobSpark - Your AI Career Co-Pilot',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="py-16 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-t-2xl p-8 sm:p-12 text-white">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="p-4 bg-white/20 rounded-full">
                <Shield className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">Privacy Policy</h1>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Last Updated: January 1, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Early Access Version</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="bg-white rounded-b-2xl shadow-lg p-8 lg:p-12">
            {/* Table of Contents */}
            <div className="mb-12 p-6 bg-slate-50 rounded-xl">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Quick Navigation</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <a href="#information-we-collect" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Database className="w-4 h-4" />
                  <span>Information We Collect</span>
                </a>
                <a href="#how-we-use" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Lock className="w-4 h-4" />
                  <span>How We Use Your Information</span>
                </a>
                <a href="#legal-basis" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <CheckCircle className="w-4 h-4" />
                  <span>Legal Basis for Processing</span>
                </a>
                <a href="#information-sharing" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <User className="w-4 h-4" />
                  <span>Information Sharing</span>
                </a>
                <a href="#your-rights" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <Shield className="w-4 h-4" />
                  <span>Your Rights Under POPIA</span>
                </a>
                <a href="#contact-us" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
            
            <div className="prose prose-slate max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-600" />
                  Introduction
                </h2>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    JobSpark, a product of Auxo Digital Pty Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered career platform and services.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    This policy complies with the Protection of Personal Information Act (POPIA) of South Africa and other applicable privacy laws.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-blue-800 font-medium">Contact Information:</p>
                    <ul className="text-blue-700 space-y-1 mt-2">
                      <li>Auxo Digital Pty Ltd</li>
                      <li>6 Hoggs Bay Close, Kyalami, 1684, South Africa</li>
                      <li>Email: info@auxo.digital</li>
                      <li>Phone: +27 21 8480 9</li>
                      <li>Information Officer: Theodore Egling</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="information-we-collect" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Database className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900">Information We Collect</h2>
                </div>
                
                <div className="space-y-6">
                  <PrivacyAccordion 
                    title="Personal Information"
                    items={[
                      "Name, email address, and contact information",
                      "Professional information (work experience, education, skills)",
                      "CV and resume content",
                      "Interview practice recordings and responses",
                      "Profile preferences and settings",
                      "Voice recordings for AI interview practice",
                      "Video recordings for interview preparation"
                    ]}
                  />
                  
                  <PrivacyAccordion 
                    title="Technical Information"
                    items={[
                      "Device information and browser type",
                      "IP address and location data",
                      "Usage patterns and platform interactions",
                      "Performance and analytics data",
                      "Cookies and similar tracking technologies",
                      "Session recordings for user experience improvement"
                    ]}
                  />
                  
                  <PrivacyAccordion 
                    title="Cookies and Tracking Technologies"
                    content={
                      <div>
                        <p className="text-slate-700 leading-relaxed mb-4">
                          We use cookies and similar technologies to enhance your experience. You can manage your cookie preferences through our cookie banner or browser settings.
                        </p>
                        <ul className="list-disc pl-6 text-slate-700 mb-4 space-y-2">
                          <li><strong>Necessary Cookies:</strong> Essential for site functionality</li>
                          <li><strong>Analytics Cookies:</strong> Help us understand site usage</li>
                          <li><strong>Marketing Cookies:</strong> Used for personalised advertising</li>
                        </ul>
                      </div>
                    }
                  />
                </div>
              </section>

              <section id="how-we-use" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Lock className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900">How We Use Your Information</h2>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-slate-700">Provide AI-powered interview coaching and CV generation services</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-slate-700">Personalise your experience and improve our platform</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-slate-700">Analyse usage patterns to enhance our services</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-slate-700">Communicate with you about your account and our services</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-slate-700">Ensure platform security and prevent fraud</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-slate-700">Comply with legal obligations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-slate-700">Process voice and video data for AI training and improvement</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-slate-700">Provide career matching and job recommendation services</span>
                    </div>
                  </div>
                </div>
              </section>

              <section id="legal-basis" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900">Legal Basis for Processing (POPIA Compliance)</h2>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Under POPIA, we process your personal information based on the following lawful grounds:
                  </p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-purple-900 mb-2">Consent</h3>
                      <p className="text-purple-800 text-sm">Where you have given explicit consent for specific processing activities</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Contract Performance</h3>
                      <p className="text-blue-800 text-sm">To provide our services as agreed in our terms</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-green-900 mb-2">Legitimate Interests</h3>
                      <p className="text-green-800 text-sm">For service improvement and security purposes</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-orange-900 mb-2">Legal Obligation</h3>
                      <p className="text-orange-800 text-sm">To comply with applicable laws and regulations</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="information-sharing" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <User className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900">Information Sharing and Disclosure</h2>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="bg-orange-50 p-4 rounded-lg mb-6 border-l-4 border-orange-500">
                    <p className="text-orange-800 font-medium">We do not sell, trade, or rent your personal information to third parties.</p>
                  </div>
                  
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We may share your information only in the following circumstances:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                      <span className="text-slate-700">With your explicit consent</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                      <span className="text-slate-700">To comply with legal obligations or court orders</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                      <span className="text-slate-700">To protect our rights, property, or safety, or that of our users</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                      <span className="text-slate-700">With trusted service providers who assist in operating our platform (under strict confidentiality agreements)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                      <span className="text-slate-700">In connection with a business transfer or merger</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                      <span className="text-slate-700">With AI service providers (OpenAI, ElevenLabs) for processing voice and text data</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2" />
                      <span className="text-slate-700">With hosting and infrastructure providers (Supabase, Netlify) for data storage and processing</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Lock className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900">Data Security</h2>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-slate-700">Encryption of data in transit and at rest</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-slate-700">Regular security assessments and updates</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-slate-700">Access controls and authentication measures</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-slate-700">Employee training on data protection</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-slate-700">Secure cloud infrastructure with industry-standard certifications</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-slate-700">Regular backup and disaster recovery procedures</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-slate-700">Multi-factor authentication for administrative access</span>
                    </div>
                  </div>
                </div>
              </section>

              <section id="your-rights" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900">Your Rights Under POPIA</h2>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    As a South African resident, you have the following rights regarding your personal information:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Right to Access</h3>
                      <p className="text-blue-800 text-sm">Request access to your personal information we hold</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Right to Correction</h3>
                      <p className="text-blue-800 text-sm">Request correction of inaccurate or incomplete information</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Right to Deletion</h3>
                      <p className="text-blue-800 text-sm">Request deletion of your personal information</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Right to Object</h3>
                      <p className="text-blue-800 text-sm">Object to the processing of your personal information</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Right to Data Portability</h3>
                      <p className="text-blue-800 text-sm">Request your data in a portable format</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-blue-900 mb-2">Right to Withdraw Consent</h3>
                      <p className="text-blue-800 text-sm">Withdraw consent for processing where applicable</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                    <p className="text-blue-800">
                      To exercise these rights, please contact our Information Officer at info@auxo.digital.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Clock className="w-5 h-5 text-slate-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900">Data Retention</h2>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods include:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        <User className="w-4 h-4 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Account Data</h3>
                        <p className="text-slate-700 text-sm">Retained while your account is active and for 2 years after closure</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        <Database className="w-4 h-4 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Interview Recordings</h3>
                        <p className="text-slate-700 text-sm">Retained for 1 year unless you request earlier deletion</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        <Lock className="w-4 h-4 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Analytics Data</h3>
                        <p className="text-slate-700 text-sm">Aggregated and anonymised data may be retained indefinitely</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        <Shield className="w-4 h-4 text-slate-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Legal Compliance Data</h3>
                        <p className="text-slate-700 text-sm">Retained as required by applicable laws</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-slate-100 rounded-lg">
                    <p className="text-slate-700">
                      When we no longer need your information, we will securely delete or anonymise it.
                    </p>
                  </div>
                </div>
              </section>

              <section id="contact-us" className="mb-12 scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <ExternalLink className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900">Contact Us</h2>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-200 shadow-sm">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-slate-900 mb-2">Auxo Digital Pty Ltd</h3>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-center gap-2">
                          <User className="w-4 h-4 text-green-600" />
                          <span><strong>Information Officer:</strong> Theodore Egling</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4 text-green-600" />
                          <span><strong>Email:</strong> info@auxo.digital</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Lock className="w-4 h-4 text-green-600" />
                          <span><strong>Phone:</strong> +27 21 8480 9</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Database className="w-4 h-4 text-green-600" />
                          <span><strong>Address:</strong> 6 Hoggs Bay Close, Kyalami, 1684, South Africa</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-slate-900 mb-2">Information Regulator</h3>
                      <p className="text-slate-700 mb-3">
                        If you are not satisfied with our response, you may lodge a complaint with the Information Regulator of South Africa at{" "}
                        <a href="https://inforegulator.org.za" className="text-green-600 hover:text-green-700">
                          inforegulator.org.za
                        </a>
                      </p>
                      <a 
                        href="https://inforegulator.org.za/contact-us/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-green-600 hover:text-green-700"
                      >
                        Contact the Information Regulator
                        <ExternalLink className="ml-1 w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Privacy Accordion Component
function PrivacyAccordion({ title, items, content }: { title: string; items?: string[]; content?: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-slate-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-500" />
        )}
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4"
        >
          {items ? (
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : content ? (
            content
          ) : null}
        </motion.div>
      )}
    </div>
  );
}